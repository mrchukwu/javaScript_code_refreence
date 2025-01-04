'use strict'

const aero = {
    airline: 'Aero Contractor',
    iataCode: 'AC',
    bookings: [],
    book(flightNumber, name){
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNumber}`, name});
    },
}

//test case
aero.book(423, 'Kennedy Chukwu');
aero.book(572, 'Jane Doe');
// console.log(aero);

const ebomAirline = {
    airline: 'Ebom Airline',
    iataCode: 'EBM',
    bookings: [],
}

const book = aero.book;

book.call(aero, 45, 'Will Smith');
book.call(aero, 45, 'Jennifer Okafor');
console.log(aero);

const arikAir = {
    airline: 'Arik Airline',
    iataCode: 'AR',
    bookings: [],
}

const bookArik = aero.book;

book.call(ebomAirline, 79, 'Martin Akaigwe');

//Using the Apply method
const flightData = [89, 'Marry Jane'];
// const flightData = [89, 'Marry Jane'];
book.apply(ebomAirline, flightData);
console.log(ebomAirline);


//Bind method
const bookEbom = book.bind(ebomAirline);
bookEbom(98, 'Noah Ark');
console.log();


//Partial Application