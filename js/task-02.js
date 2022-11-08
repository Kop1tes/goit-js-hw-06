const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const categoriesEl = document.querySelector('#ingredients');

const makeCategoriesItemsEl = ingredients.map(ingredient => {

    const categoriesItemEl = document.createElement('li');
    categoriesItemEl.textContent = ingredient;
    categoriesItemEl.classList.add('item');
    return categoriesItemEl;
  })

categoriesEl.append(...makeCategoriesItemsEl);

console.log(categoriesEl);


