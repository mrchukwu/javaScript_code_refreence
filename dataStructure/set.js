'use strict';
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


//Task: Finding two elements from the two Set data of array (Intersection)
//find intersection of italianFoods and mexicanFoods
const commonFoods = [...new Set([...italianFoods].filter(element => mexicanFoods.has(element)))];
// console.log(commonFoods)
// Explanation:
// Spread Operator (...):The spread operator converts the Set to an array, allowing the use of array methods.
//filter() Method:Filters elements in setA that are also present in setB.
//has() Method:Checks if an element exists in setB.
//new Set():Converts the filtered result back into a Set object.

//-----------------------------------------------------------------------

//result is error (checking uo on this)
// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log(...commonFoods)


//Task combining two Set data (Union)
const italianMexicanFusion = new Set([...italianFoods, ...mexicanFoods])
// console.log(italianMexicanFusion)

//produces error
// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log(italianMexicanFusion)

//Task: Getting the items in the italianFoods that are not in mexicanFoods
const difference = [...new Set([...italianFoods].filter(element => !mexicanFoods.has(element)))];
// console.log(difference);
// Explanation:
//Spread Operator (...): ...setA converts the setA into an array to allow the use of array methods like filter().
// filter() Method: Filters out elements from setA that do exist in setB.
//     !setB.has(element) checks whether an element in setA is not present in setB.
//new Set(): Converts the filtered array back into a Set, ensuring uniqueness.

//produce error
// const difference = italianFoods.difference(mexicanFoods);
// console.log(difference);

//***symmetricDifference***
//The symmetric difference of two sets in JavaScript refers to the elements that are present in either of the sets but not in both. In other words, it combines the unique elements from both sets and excludes the elements that appear in both.
// JavaScript's Set does not have a built-in method for symmetric difference, but you can compute it using a combination of filter() and has() methods.

//Task finding the unique values from both italianFoods and mexicanFoods. The SymmetricDifference
const uniqueSymmetricFoods = new Set(
    [
        ...[...italianFoods].filter(food => !mexicanFoods.has(food)),
        ...[...mexicanFoods].filter(food => !italianFoods.has(food))
]
);
// console.log(uniqueSymmetricFoods);

//produce error
// const uniqueItalianMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);

//isDisjointFrom()
// In JavaScript, there is no built-in isDisjointFrom() method for sets, but the concept of disjoint sets can be implemented manually.
//What Does "Disjoint" Mean?
//Two sets are disjoint if they do not have any elements in common. For example:
//Set A = {1, 2, 3}
// Set B = {4, 5, 6}
// Since A and B share no common elements, they are disjoint.

//Implementing isDisjointFrom() in JavaScript
// To check whether two sets are disjoint, you can iterate through one set and check if any of its elements exist in the other set using the has() method.

//Example Implementation
// javascript
// Copy code
function isDisjointFrom(set1, set2) {
    for (let element of set1) {
        if (set2.has(element)) {
            return false; // If a common element is found, they are not disjoint
        }
    }
    return true; // No common elements found, they are disjoint
}
// // Example usage
const setA = new Set([1, 2, 3]);
const setB = new Set([4, 5, 6]);
const setC = new Set([3, 4, 5]);
//working with the isDisjointFrom() function
console.log(isDisjointFrom(setA, setB)); // Output: true (disjoint)
console.log(isDisjointFrom(setA, setC)); // Output: false (not disjoint)


//Checking if italianFoods data set is completely different from the mexicanFoods data set


//Produce error
console.log(italianFoods.isDisjointFrom(mexicanFoods))


