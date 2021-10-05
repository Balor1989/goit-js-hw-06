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
for (const ingredient of ingredients) {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item')

ingredientsList.append(item)
}
// Output to the console our elements list
console.log(ingredientsList)