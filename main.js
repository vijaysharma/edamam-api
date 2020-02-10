import Recipe from './Recipe.js';
import HttpClient from './HttpClient.js';
import RecipeElement from './RecipeElement.js';
import Loader from './Loader.js';

const APP_ID = 'e36b132d';
const APP_KEY = '99a46b8711c6759f6af84874c80a8831';

const hc = new HttpClient('https://api.edamam.com/search', APP_ID, APP_KEY);

const rootElement = document.getElementById('root');


const loader = new Loader();
loader.createLoaderElement('lds-grid');

rootElement.appendChild(loader.element);

hc.getData().then(recipes => {
	loader.removeLoaderElement();
	recipes.hits.map(recipe => {
		const recipeElement = new RecipeElement(new Recipe(recipe.recipe)).createRecipeElement();
		rootElement.appendChild(recipeElement.element);
	})
})