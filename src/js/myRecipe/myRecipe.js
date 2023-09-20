import { fetchMyRecipe } from './myRecipeFetch';
import { renderRecipeCard } from './myRecipeRender';

const recipeCard = document.querySelector('.my-recipe__list-cards');

try {
  const recipeData = fetchMyRecipe();
  const renderRecipe = renderRecipeCard(recipeData);
  if (!recipeData) {
    throw new Error("Sorry, but you currently don't have your recipes.");
  }
  recipeCard.innerHTML = renderRecipe;
} catch (error) {
  console.log(error.message);
}