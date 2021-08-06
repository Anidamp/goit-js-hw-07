const categoriesEl = document.querySelector('#categories');
console.log(`В списке ${categoriesEl.children.length} категории`)

const allItemsInCategories = categoriesEl.querySelectorAll('.item');
allItemsInCategories.forEach(el => {
    const textEl = el.querySelector('h2')
    console.log(`Категория: ${textEl.textContent}`);

    const elQuantity = el.querySelectorAll('li')
    console.log(`Количество элементов: ${elQuantity.length}`)
}

)