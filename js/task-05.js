// Выполняет привязку ссылок к переменным
const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output')

// Изменяет значение заголовка в соответствии с введенными данными
nameInputEl.addEventListener('input', (symbol =>
    symbol.currentTarget.value !== ''
        ? nameOutputEl.textContent = symbol.currentTarget.value
        : nameOutputEl.textContent = 'Anonymous'))
  
