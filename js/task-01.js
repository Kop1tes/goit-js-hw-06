const itemsCategories = document.querySelector('#categories');

const liItemsCategories = itemsCategories.querySelectorAll('li.item');
console.log('Number of catedories:', liItemsCategories.length);



const counter = parent => { return parent.childElementCount };

const message = elements => {
    elements.forEach(element => {
        const firstElem = element.firstElementChild;

        const secondElem = firstElem.nextElementSibling
        
        console.log(`Category: ${firstElem.textContent}`);
        console.log(`Elements: ${counter(secondElem)}`);
    });
};

const subCategories = itemsCategories.querySelectorAll('.item');
message(subCategories);