//SET
//used to remove duplicates
//doesnt store duplicate items
//working with set

const ordersSet = new Set(
    [
        'Pizza',
    'Pasta',
    'Risotto',
    'Pizza',
    'Pasta'
        ]
);

//looping through the ordersSet
// for(const order of ordersSet)
    // console.log(order);

// console.log(ordersSet.size)
// console.log(ordersSet.has('Pizza'));

//Example working with Set, Array and Spread Operator
const staff = ['waiter', 'chef', 'waiter', 'manager', 'waiter' ];
const uniqueStaff = [...new Set(staff)];
// console.log(uniqueStaff);


const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
]);

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
]);









// Data needed for first part of the section
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//
//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24,
//         },
//     },
// };