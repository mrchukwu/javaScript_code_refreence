const books = [
    {
        title: 'Algorithms',
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        publisher: 'Addison-Wesley Professional',
        publicationDate: '2011-03-24',
        edition: 4,
        keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
        pages: 976,
        format: 'hardcover',
        ISBN: '9780321573513',
        language: 'English',
        programmingLanguage: 'Java',
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
                reviewsCount: 63,
                fiveStarRatingCount: 976,
                oneStarRatingCount: 13
            }
        },
        highlighted: true
    },
    {
        title: 'Structure and Interpretation of Computer Programs',
        author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
        publisher: 'The MIT Press',
        publicationDate: '2022-04-12',
        edition: 2,
        keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
        pages: 640,
        format: 'paperback',
        ISBN: '9780262543231',
        language: 'English',
        programmingLanguage: 'JavaScript',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.36,
                ratingsCount: 14,
                reviewsCount: 3,
                fiveStarRatingCount: 8,
                oneStarRatingCount: 0
            }
        },
        highlighted: true
    },
    {
        title: 'Computer Systems: A Programmer\'s Perspective',
        author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
        publisher: 'Prentice Hall',
        publicationDate: '2002-01-01',
        edition: 1,
        keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
        pages: 978,
        format: 'hardcover',
        ISBN: '9780130340740',
        language: 'English',
        programmingLanguage: 'C',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 1010,
                reviewsCount: 57,
                fiveStarRatingCount: 638,
                oneStarRatingCount: 16
            }
        },
        highlighted: true
    },
    {
        title: 'Operating System Concepts',
        author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
        publisher: 'John Wiley & Sons',
        publicationDate: '2004-12-14',
        edition: 10,
        keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
        pages: 921,
        format: 'hardcover',
        ISBN: '9780471694663',
        language: 'English',
        programmingLanguage: 'C, Java',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 3.9,
                ratingsCount: 2131,
                reviewsCount: 114,
                fiveStarRatingCount: 728,
                oneStarRatingCount: 65
            }
        }
    },
    {
        title: 'Engineering Mathematics',
        author: ['K.A. Stroud', 'Dexter J. Booth'],
        publisher: 'Palgrave',
        publicationDate: '2007-01-01',
        edition: 14,
        keywords: ['mathematics', 'engineering'],
        pages: 1288,
        format: 'paperback',
        ISBN: '9781403942463',
        language: 'English',
        programmingLanguage: null,
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.35,
                ratingsCount: 370,
                reviewsCount: 18,
                fiveStarRatingCount: 211,
                oneStarRatingCount: 6
            }
        },
        highlighted: true
    },
    {
        title: 'The Personal MBA: Master the Art of Business',
        author: 'Josh Kaufman',
        publisher: 'Portfolio',
        publicationDate: '2010-12-30',
        keywords: ['business'],
        pages: 416,
        format: 'hardcover',
        ISBN: '9781591843528',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.11,
                ratingsCount: 40119,
                reviewsCount: 1351,
                fiveStarRatingCount: 18033,
                oneStarRatingCount: 1090
            }
        }
    },
    {
        title: 'Crafting Interpreters',
        author: 'Robert Nystrom',
        publisher: 'Genever Benning',
        publicationDate: '2021-07-28',
        keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
        pages: 865,
        format: 'paperback',
        ISBN: '9780990582939',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.7,
                ratingsCount: 253,
                reviewsCount: 23,
                fiveStarRatingCount: 193,
                oneStarRatingCount: 0
            }
        }
    },
    {
        title: 'Deep Work: Rules for Focused Success in a Distracted World',
        author: 'Cal Newport',
        publisher: 'Grand Central Publishing',
        publicationDate: '2016-01-05',
        edition: 1,
        keywords: ['work', 'focus', 'personal development', 'business'],
        pages: 296,
        format: 'hardcover',
        ISBN: '9781455586691',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.19,
                ratingsCount: 144584,
                reviewsCount: 11598,
                fiveStarRatingCount: 63405,
                oneStarRatingCount: 1808
            }
        },
        highlighted: true
    }
];

//Question: Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).
const [mainKeyword, ...rest] = books[0].keywords;
// console.log(...rest);

//Question: Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.
const {publisher: bookPublisher, ...restOfTheBook} = books[1];
// console.log(restOfTheBook);

//Question: Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".
function printBookAuthorsCount(title, ...authors){
    console.log(`The book ${title} has ${authors.length} authors`);
}
printBookAuthorsCount("Escape from Naija", "Ken", "Emma", "Jake", "Chris");




const restaurant = {
    name: 'classico itlaiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['italian', 'Pizzeria', 'vegetarian', 'organic'],
    starterMenu: ['focaccia', 'bruschetta', 'Garlic', 'bread', 'caprese salad', 'bread'],
    mainMenu: ['pizza', 'pasta', 'riotto'],

    order: function(starterIndex, mainIndex){
        return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
    },

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
        // console.log(mainIngredients);
        // console.log(otherIngredients);
    }
};

//order Pizza
restaurant.orderPizza("mushrooms", "onions", "olives", "spinach")
restaurant.orderPizza();

//Spread, because it's on the Right handside of the assignment Operator
const arr = [1,2,...[3,4]];

//Rest, because it's on the left handside of the assignment Operator
const [a, b, ...others] = [1,2,3,4,5];


//adding using rRest operator/parameter, function and custom logic. Creating an addition calculator.
const sum = function(...numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) sum += numbers[i];
    // console.log(sum);
}

//adding numbers using functions and rest operator, using reduce()
const add = function(...numbers){
    // console.log(numbers.reduce((acc, curr) => acc + curr, 0));
}
add(3,4);
add(3,4,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
sum(4,5,6,7,8,)