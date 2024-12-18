//Maps: they are alot useful more than Sets

const rest = new Map();
rest.set('name', 'Genvinic');
rest.set(1,  'Port Harcourt, Nigeria');
rest.set(2, 'owerri');
rest.set('open', 11);
rest.set('close', 23);
rest.set(true, 'we are open');
rest.set(false, 'we are closed');

const time = 12;
 // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(time > rest.get('open') && time < rest.get('close'));
// console.log(rest);
// console.log(rest.get(2));


const question = new Map(
    [
        ['question', 'what is the best programming language?'],
        [1, 'c'],
        [2, 'java'],
        [3, 'javaScript'],
        ['correct', 3],
        [true, 'correct🎊 '],
        [false, 'wrong, try again!'],
    ]
)
//little quiz app demo using Map
console.log(question.get('question'));
for(const [key, value] of question){
    if(typeof key === 'number') console.log(`Answer: ${key}: ${value}`);
}
// const answer = Number(prompt(`Your answer: `))
const answer = 3
console.log(question.get(question.get('correct') === answer));

console.log(question);
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);


