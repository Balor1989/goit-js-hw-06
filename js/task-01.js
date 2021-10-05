// First condition (Arrow length)
const arroyOfItemsEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${arroyOfItemsEl.length}`);

// Second condition (Tittle name and elements length)
for (const item of arroyOfItemsEl) {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
}