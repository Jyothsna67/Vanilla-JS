document.addEventListener('DOMContentLoaded', function() {
    // Function to make a request to JSONPlaceholder API
    function fetchData() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            // Display the fetched data
            const dataList = document.getElementById('fetchData');
            dataList.innerHTML = ''; // Clear previous data

            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.title; // Displaying only the 'title' property, you can change this to display other properties
                dataList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    const Fruits = [
        'Mango',
        'Banana',
        'Apple',
        'Orange',
        'Watermelon',
        'Kiwi',
        'Strawberry'
    ];

    // Display Original Fruits
    const originalFruitsList = document.getElementById('originalFruits');
    Fruits.forEach(fruit => {
        const listItem = document.createElement('li');
        listItem.textContent = fruit;
        originalFruitsList.appendChild(listItem);
    });

    // Function to sort fruits alphabetically
    function sortFruits() {
        const sortedFruitsList = document.getElementById('sortedFruits');
        sortedFruitsList.innerHTML = ''; // Clear previous list
        const sortedFruits = Fruits.slice().sort();
        sortedFruits.forEach(fruit => {
            const listItem = document.createElement('li');
            listItem.textContent = fruit;
            sortedFruitsList.appendChild(listItem);
        });
    }

    // Function to filter fruits by length
    function filterFruitsByLength() {
        const filteredFruitsList = document.getElementById('filteredFruits');
        filteredFruitsList.innerHTML = ''; // Clear previous list
        const filteredFruits = Fruits.filter(fruit => fruit.length > 5);
        filteredFruits.forEach(fruit => {
            const listItem = document.createElement('li');
            listItem.textContent = fruit;
            filteredFruitsList.appendChild(listItem);
        });
    }

    // Function to check if 'Mango' exists
    function checkForMango() {
        const mangoCheck = document.getElementById('mangoCheck');
        const fruitToFind = 'Mango';
        mangoCheck.textContent = Fruits.includes(fruitToFind) ? `${fruitToFind} is in the array` : `${fruitToFind} is not in the array`;
    }

    // Event listener for button click
    const actionButton = document.getElementById('actionButton');
    actionButton.addEventListener('click', function() {
        // sortFruits();
        filterFruitsByLength();
        checkForMango();
    });

    const sortButton = document.getElementById('sortButton');
    sortButton.addEventListener('click', function() {
        sortFruits();
    });

    // Event listener for fetch button click
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('click', function() {
        fetchData();
    });
});
