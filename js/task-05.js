// Выполняет привязку ссылок к переменным
const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output')

// Изменяет значение заголовка в соответствии с введенными данными
nameInputEl.addEventListener('input', (event) => {
nameOutputEl.textContent = event.currentTarget.value;
})


