const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEL = document.querySelector('#ingredients');
const elements = ingredients.map(el => {
  const ingredient = document.createElement('li')
  ingredient.textContent = el;
  return ingredient
}
  )
ingredientsEL.append(...elements)