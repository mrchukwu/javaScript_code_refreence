//Working with strings
//A string can't be mutated.
//When methods are used on string, the strings are converted to objects behind the scene and when the method is done
// with the task on the string. The string is then converted to a primitive string value.
//User input always comes in a String format, if you want to compare the strings. You will have to convert the
// string toLowerCase() first.
//replace(), replaceALL(), repeat(), toLowerCase(), toUpperCase(), trim(), split(), slice(), join(), length,
// padStart(), padEnd().

const airline = 'Tap Air Nigeria';
// const plane = 'A320';

console.log(airline.length)
// console.log(plane[0])
// console.log(plane[1])


//WORKING WITH STRING METHODS

//changing the string character case
console.log( airline.toLowerCase());
console.log( airline.toUpperCase());


//correcting the case sensitivity of the passenger keyed in name
const passenger = 'kEnNEdy';
const passengerToLowerCase = passenger.toLowerCase();
const passengerCorrectCase = passengerToLowerCase[0].toUpperCase() + passengerToLowerCase.slice(1);

// console.log(passengerCorrectCase)

//creating a function on correcting the case Sensitivity of passenger keyed in name
const correctNameCase = function correctNameCase(passengerName) {
    const name = passengerName.toLowerCase();
    const correctNameCase = name[0].toUpperCase() + name.slice(1);
    console.log(correctNameCase);
}

//checking the test cases
correctNameCase('kEnNEdy');
correctNameCase('viViAN');

//Task
const email = 'kennedy@gmail.com';
const loginEmail = ' kEnNedy@GMail.com';

//first solution
const emailToLowercase = email.toLowerCase();
const trimEmail = emailToLowercase.trim(); //trim() removes any white-space around the string

//another solution
const normalizedEmail = email.toLowerCase().trim(); //this is called chanining ethods

//checking the value
console.log(trimEmail);
console.log(normalizedEmail);

//working with replace() method
//the replace() method doesn't change the string, but creates a new one. Strings can't mutate.
//there is also replaceALL()
const priceUS = '288,97$';
const priceNG = priceUS.replace('$', 'NG').replace(',',     '.');
console.log(priceNG);

const announcement = 'All passengers at the door 11, please move to door 9 to start boarding...';
//replace all 'doors' to 'gate'
console.log(announcement);
console.log(announcement.replaceAll('door', 'gate')) //replaceALl()

//old method of doing it was using regular expression
console.log(announcement.replace(/door/g, 'gate'));


//Methods that return Boolean
const plane = 'Air A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'))
console.log(plane.endsWith('neo'))

//working with function
const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are NOT allowed to board with the item');
    }else {
        console.log('Welcome aboard!')
    }
}

//test case for the function
checkBaggage('I have knife, gun, shoes and some clothes');
checkBaggage('I have just my laptop, shoes and clothes');



console.log(airline.indexOf('r'))
console.log(airline.lastIndexOf('r'))

//substring methods
console.log(airline.slice(4));
console.log(airline.slice(4, 7)); //the 7th item is not included in the sub-string. The length of the extracted
// string is always (end - beginning) e.g (7 - 4)

//Extracting a sub-string without knowing the end of it's index
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //this will always get the last white-space character and
// every other thing that follows it.

console.log(airline.slice(-7)); //counting from the end backward
console.log(airline.slice(4, -8));

//working with slice and function
const checkMiddleSeat = function checkMiddleSeat(seat){
    //B and E are middle seats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E') console.log('You got the middle seat 😒');
    else console.log('You got lucky 😎');
}

//test cases for the checkMiddleSeat Function
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E'); //lol the face of the emoji in the result...🤣

//Working with split() and join() method
console.log('kennedy chukwu'.split(" , "));

const [firstname, lastname] = "kennedy chukwu".split("  ");

// const newName = ['Mr.', firstname, lastname.toUpperCase()].join(' '); //the toUpperCase() doesnt work error, you
// // cant do that. Just-in case your planning on doing that...
const newName = ['Mr.', firstname, lastname].join(' '); //this works.
console.log(newName);

//A function that turns the first letter of each name toUpperCase() letter
const capitalizedName = function(username){
    const name = username.split(" ");
    const nameUpperCase = [];

    for(const n of name){
        // nameUpperCase.push(n[0].toUpperCase() + n.slice(1));
        nameUpperCase.push(n.replace(n[0], n[0].toUpperCase())); //another way of writing the logic
    }
    console.log(nameUpperCase.join(' '));
}

//function test case
capitalizedName('clinton chukwu');
capitalizedName('chinweotito chukwu');

//Padding a string (this means adding some characters at the beginning or end of a string)
const message = 'How are you?';
console.log(message.padStart(18, 'Hey!,'));
console.log(message.padEnd(18, 'Hey!,'));


//Task practice. A function to mask out beginning digits of credit cards (a kind of bank credi card masking
// prototype). Working with length, slice() and padStart() method
const maskCreditCard = function(cardNumber){
    const cardNumberToString = cardNumber + ''; //this will covert the number to string
    const cardNumberMasked = cardNumberToString.slice( -4);
    return cardNumberMasked.padStart(cardNumberToString.length, '*');
}

//Test cases of the maskCreditCard() function.
console.log(maskCreditCard(56982819989493944));
console.log(maskCreditCard(49829294829233928));
console.log(maskCreditCard(49829294829));


//Repeat() method. This enables us to repeat strings
const message2 = 'All flight delayed, bad weather....\n';
console.log(message2.repeat(3));

//function working with repeat()
const planeInLine = function(numberOfPlanes){
    console.log(`There ${numberOfPlanes} planes in line ${'✈️'.repeat(numberOfPlanes)}`);
}

//test case for the planeInLine() function
planeInLine(7);
planeInLine(19);
planeInLine(5);