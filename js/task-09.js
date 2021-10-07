// Выполняет привязку ссылок к переменным
const styleOfBody = document.querySelector('body')
const changeColorBtn = document.querySelector('.change-color')
const backgroundColorValue = document.querySelector('.color')

// Функция генерирует случайный цвет и передает его значения переменным
const getRandomHexColor = (() => {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  backgroundColorValue.textContent = randomColor;
  styleOfBody.style.backgroundColor = randomColor;
});
// Запускает выполнение функции по нажатию на кнопку 'Change color'
changeColorBtn.addEventListener('click', getRandomHexColor);






 // backgroundColorValue.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // styleOfBody.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;