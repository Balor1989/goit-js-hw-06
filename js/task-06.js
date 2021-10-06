
// Выполняет привязку ссылок к переменным
const textInputEl = document.querySelector('#validation-input');
const inputSymbolLength = textInputEl.getAttribute('data-length');

/*Добавляет красную рамку по умолчанию при потере фокуса.
Изменяет цвет рамки на зеленый если количество символов совпадает с атрибутом data-length*/
textInputEl.addEventListener('blur', function (event) {
    textInputEl.classList.add('invalid')
    if (event.currentTarget.value.length === Number(inputSymbolLength)) {
       textInputEl.classList.replace('invalid', 'valid')
    }
})
        