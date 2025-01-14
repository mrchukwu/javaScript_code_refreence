/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

//Question 1. Create an array 'events' of the different game events that happened (no duplicates)
//solution
const arrayOfEvents = [...new Set(gameEvents.values())]
// console.log(arrayOfEvents) //check result in terminal(or console)

//Question 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
//solution
const removeUnfairEvent = gameEvents.delete(64);
console.log(`Yellow card at 64, removed from the event log of the game. ${removeUnfairEvent}`);

//Question 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const gameOnAverageOf9mins = 90/gameEvents.size;
console.log(`An event happened, on average, every ${gameOnAverageOf9mins} minutes`);
const gameTime = [...gameEvents.keys()].pop();

//Question 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

//solution
const halfTime = 45;
for(const[time, event] of gameEvents) {
    const checkEvent = time < halfTime? `FIRST HALF ${time}: ${event}` : `SECOND HALF ${time}: ${event}`;
    console.log(checkEvent);
}