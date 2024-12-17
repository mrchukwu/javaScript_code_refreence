const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}

//Question 1. Loop over the game.scored array and print each player name to the console, along with the goal number
// (Example: "Goal 1: Lewandowski")
//my solution
const {scored} = game;
// console.log(scored);
for(const [i,player] of scored.entries()) {
    // console.log(`${player} scored: ${i +1}`)
}

//instructors solution
// for (const [i, player] of game.scored.entries())
//     console.log(`Goal ${i + 1}: ${player}`);


//Question 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// my solution
const odds = Object.values(game.odds);
let sumOfOdds = 0;
// console.log(odds);
for(const odd of odds) {
    sumOfOdds += odd;
}
sumOfOdds /= odds.length;
// console.log(sumOfOdds);

//// instructor solution.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// const {team1: Arsenal} = game;
// console.log(Arsenal);


//Question 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

for(const [team,odd] of Object.entries(game.odds)) {
   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
   console.log(`Odd of ${teamStr} : ${odd}`);
}



// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this: