// Выполняет привязку ссылок к переменным
const inputRunner = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

// Изменяет размер шрифта при передвижении бегунка
inputRunner.addEventListener('input', () => textOutput.style.fontSize = `${inputRunner.value}px`);

