
const restaurant = {
    name: 'classico itlaiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['italian', 'Pizzeria', 'vegetarian', 'organic'],
    starterMenu: ['focaccia', 'bruschetta', 'Garlic', 'bread', 'caprese salad', 'bread'],
    mainMenu: ['pizza', 'pasta', 'riotto'],

}

const arr = [2,3,4];
const [x,y,z] = arr;
console.log(x,y,z);

const [first, ...second] = restaurant.categories;
console.log(first, second);