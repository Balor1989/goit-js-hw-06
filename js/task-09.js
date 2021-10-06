const styleOfBody = document.querySelector('body')
const changeColorBtn = document.querySelector('.change-color')
const backgroundColorValue = document.querySelector('.color')

changeColorBtn.addEventListener('click', getRandomHexColor)

function getRandomHexColor() {
  backgroundColorValue.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  styleOfBody.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
