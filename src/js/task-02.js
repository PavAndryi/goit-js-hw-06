// Завдання 2
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>
// JavaScript містить масив рядків.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.


// const elementIingredients = ingredients.forEach(element => console.log(element));


const addItem = document.createElement('li');
addItem.classList.add('item');
addItem.textContent = 'This is a heading';

// console.log(heading); // <h1>This is a heading</h1>

const playsUl = document.querySelectorAll('.ingredients');
playsUl.appendChildren(addItem);
console.log(playsUl)



