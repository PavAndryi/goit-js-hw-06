// Напиши скрипт, який:


// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
//  і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const categoriesSum = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesSum.length}`);
const values = [].map.call(categoriesSum, itemElem => {
    const categoryTitle = itemElem.querySelectorAll("h2");
    categoryTitle.forEach(title => console.log("category:"+ ' ' + title.textContent));
    const listSum = itemElem.querySelectorAll('ul li');
    console.log("Elements:" + " " + listSum.length);
});




