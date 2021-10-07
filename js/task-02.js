const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Create an elements list
const ingredientsList = document.querySelector('#ingredients') 

// Create a list of element properties
const items = ingredients.map(ingredient => {
  const createdEl = document.createElement('li');
  createdEl.textContent = ingredient;
  createdEl.classList.add('item')
  return createdEl
})
// Output to the console our elements list
ingredientsList.append(...items)
console.log(ingredientsList)