

const categoriesSum = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesSum.length}`);
const values = [].map.call(categoriesSum, itemElem => {
    const categoryTitle = itemElem.querySelectorAll("h2");
    categoryTitle.forEach(title => console.log("category:"+ ' ' + title.textContent));
    const listSum = itemElem.querySelectorAll('ul li');
    console.log("Elements:" + " " + listSum.length);
});




