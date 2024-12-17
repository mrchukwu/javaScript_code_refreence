//working on Object enhancements..

const openingHours = {
    thu:{
        open:12,
            close:22,
    },
    fri:{
        open:11,
            close:23,
    },
    sat:{
        open:0, //Open 24 hours
            close:24,
    }
};

const restaurant = {
    name: 'classico itlaiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['italian', 'Pizzeria', 'vegetarian', 'organic'],
    starterMenu: ['focaccia', 'bruschetta', 'Garlic', 'bread', 'caprese salad', 'bread'],
    mainMenu: ['pizza', 'pasta', 'riotto'],

    //new way of doing things
    openingHours,
    //old way of doing things
    // openingHours: openingHours,

    //enhanced way of writing methods for Objects
    order(starterIndex, mainIndex){
        return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
    },

    //old way of writing methods for Objects
    // order: function(starterIndex, mainIndex){
    //     return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
    // },

    orderDleivery: function(
        { starterIndex = 1,
            mainIndex = 0,
            time = '20:00',
            address,
        }) {
        console.log(
            `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${time}`
        );
    },
    orderPasta: function(ing1, ing2, ing3){
        console.log(
            `Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`
        );
    },

    orderPizza: function(mainIngredients = "please specify order", ...otherIngredients){
        console.log(mainIngredients);
        console.log(otherIngredients);
    }
};

console.log(restaurant)