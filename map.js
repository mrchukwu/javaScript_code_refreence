const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 42
    },
    {
        firstName: "Kennedy",
        lastName: "chukwu",
        age: 30
    },
    {
        firstName: "June",
        lastName: "Ifebe",
        age: 30
    }
]

const ageLessThan30 = users.reduce((acc, curr) => {
    if(curr.age <= 30){
        // acc = acc + " " + curr.firstName;
        acc.push(curr.firstName);
    }
    return acc;
},[])
console.log(ageLessThan30);

const output = users.filter((user) => user.age <= 30)
    .map(user => user.firstName);

console.log(output);




//check number of ages repeated
const checkRepeatedAge = users.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
}, {})





const arr = [1,2,3,4,5];

const a = arr.map(n => n + n);
// console.log(a)

const b = arr.filter(n => n % 2 === 0 );
// console.log(b)

const c = arr.reduce((a,b) => a + b, 0);
// console.log(c)

//checking fot max number
const maxNumber = arr.reduce((max, curr) => {
    if(curr > max) {
        max = curr
    }
    return max;
}, 0);
// console.log(maxNumber);