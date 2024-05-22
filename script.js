const Fruits = [
    'Mango',
    'Banana',
    'Apple',
    'Orange',
    'Watermelon',
    'Kiwi',
    'Strawberry'
];

//Display Fruits list
const fruitsList = document.getElementById('fruits');
Fruits.forEach(fruit => {
    const listItem = document.createElement('li');
    listItem.textContent = fruit;
    fruitsList.appendChild(listItem);
});

//Sorted Fruits
const sortedFruitsList = document.getElementById('sortedFruits');
const sortedFruits = Fruits.slice().sort();
sortedFruits.forEach(fruit => {
    const listItem = document.createElement('li');
    listItem.textContent = fruit;
    sortedFruitsList.appendChild(listItem);
});

//Filtered Fruits
const filteredFruitsList = document.getElementById('filteredFruits');
const filteredList = Fruits.filter(fruit => fruit.length > 5);
filteredList.forEach(fruit => {
    const listItem = document.createElement('li');
    listItem.textContent = fruit;
    filteredFruitsList.appendChild(listItem);
});

//Check for Mango 
const fruitCheck = document.getElementById('fruitCheck');
const fruitToFind = 'Mango';
fruitCheck.textContent = Fruits.includes(fruitToFind) ? `${fruitToFind} is in the array` : `$(fruitToFind} is not in the array`;


