
// Делает привязку ссылок к переменным
const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

// Счетчик чисел. Позволяет корректно отображать значение даже при изменении его в html
let totalValue =  Number(valueEl.textContent);

// Увеличивает значение счетчика на 1 по клику на кнопку "+1" и записывает его в valueEL
incrementEl.addEventListener('click', () => valueEl.textContent = totalValue += 1);

// Уменьшает значение счетчика на 1 по клику на кнопку "-1" и записывает его в valueEL
decrementEl.addEventListener('click', () => valueEl.textContent = totalValue -= 1);