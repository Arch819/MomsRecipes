import fetchRecipe from './modal-recipeApi';
import renderRecipe from './modal-recipeRender';

let favorites = [];
console.log(!!favorites.length);

function hasArrElement(arr, id) {
  const resolt = arr.filter(item => item.id === id);
  return resolt.length;
}

function addToFavorite(event) {
  event.target.textContent = 'Add to favorite';
  const id = event.target.dataset.id;

  const obj = {
    id: event.target.dataset.id,
    category: event.target.dataset.category,
  };

  const savedFavirites = JSON.parse(localStorage.getItem('favorites'));
  if (savedFavirites && hasArrElement(savedFavirites, id)) {
    const arr = savedFavirites.filter(item => item.id !== id);
    localStorage.setItem('favorites', JSON.stringify(arr));
    favorites = [];
    return;
  }
  if (savedFavirites) {
    favorites = [...savedFavirites];
  }

  favorites.push(obj);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  event.target.textContent = 'Remove from favorites';
}

const bodyEl = document.querySelector('body');
const modalWindow = document.querySelector('.modal');
const modalEl = document.querySelector('.modal-content');
const backdropEl = document.querySelector('.js-backdrop');
const cardsEl = document.querySelector('.js-gallery');
cardsEl.addEventListener('click', openModalRecipe);

function openModalRecipe(e) {
  if (e.target.classList.value === 'card-button') {
    toggleDarkTheme();
    let id = e.target.dataset.id;
    fetchRecipe(id).then(obj => {
      modalEl.innerHTML = renderRecipe(obj);
      const closeBtn = document.querySelector('.close-modal');
      backdropEl.classList.remove('is-hidden');
      document.body.classList.add('no-scroll');
      closeBtn.addEventListener('click', closeModal);
      backdropEl.addEventListener('click', closeOnEscape);
      document.addEventListener('keydown', closeOnBackdrop);
      const favoriteBtn = document.querySelector('.js-favorite');
      const savedFavirites = JSON.parse(localStorage.getItem('favorites'));

      if (
        JSON.parse(
          localStorage.getItem('favorites') && hasArrElement(savedFavirites, id)
        )
      ) {
        favoriteBtn.textContent = 'Remove from favorites';
      }
      favoriteBtn.addEventListener('click', addToFavorite);
    });
  }
}

function closeModal() {
  document.body.classList.remove('no-scroll');
  backdropEl.classList.add('is-hidden');
  document.removeEventListener('keydown', closeOnBackdrop);
  backdropEl.removeEventListener('click', closeOnEscape);
  document
    .getElementById('v1')
    .contentWindow.postMessage(
      '{"event":"command","func":"stopVideo","args":""}',
      '*'
    );
}

function closeOnEscape(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModal();
}

function closeOnBackdrop(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function toggleDarkTheme() {
  if (bodyEl.classList.contains('dark')) {
    modalWindow.classList.add('black');
  } else {
    modalWindow.classList.remove('black');
  }
}
