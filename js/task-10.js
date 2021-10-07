const valueToInput = document.querySelector('input')
console.log(valueToInput)
const createBtn = document.querySelector('[data-create]');
console.log(createBtn);
const destroyBtn = document.querySelector('[data-destroy]');
console.log(destroyBtn);
const divs = document.querySelector('#boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const onCreateCounterInValueInput = (value) => {
  valueToInput.setAttribute('counter', value.currentTarget.value)
  console.log(valueToInput)
};

const onCreateBoxes = () => {
  for (let i = 1; i <= 5; i += 1){
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('box-item')
    createdDiv.style.width = '50px'
    createdDiv.style.height = '50px'
    createdDiv.style.outline = '2px solid black'
    createdDiv.style.backgroundColor = `${getRandomHexColor()}`
    createdDiv.style.margin = '15px'
   
  console.log(createdDiv)

  divs.appendChild(createdDiv);
  }
console.log(divs)
};

const onDestroyBtn = () => divs.innerHTML = '';
  
valueToInput.addEventListener('input', onCreateCounterInValueInput);
createBtn.addEventListener('click', onCreateBoxes);
destroyBtn.addEventListener('click', onDestroyBtn);
console.log(divs)







