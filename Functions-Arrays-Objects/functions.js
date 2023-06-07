/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Multiply 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
/*

Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b) {
  return a * b;
  /*add your code here*/
}
console.log(multiply(12, 4));

/*


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: Age in Cat years 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Do the following:
   1. Invoke the catYears function below and pass an age value to it
   2. Use the received value to calculate the age in cat years (1 human year is equal to 7 cat years)
   3. Return the newly calculated age
*/

function catYears(cat1, cat2) {
  return cat1 + cat2;
  /*add your code here*/
}
console.log(catYears(21, 16));
/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: Convert to Arrow Function  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Take the commented ES5 syntax and convert it to ES6 arrow Synta

let myFunction = (a, b) => a * b;
console.log(myFunction(12, 4));
///////

let anotherFunction = (param) => param;

console.log(anotherFunction("I am Ah, a sofware developer."));

//////
let add = (cat3, cat4) => cat3 + cat4;
console.log(add(21, 16));
/*


 
------------
function myFunction() {
console.log("Function was invoked!");
};


myFunction();

----------------

let anotherFunction = function (param) {
  return param;
};

anotherFunction("Example");

---------------

let add = function (param1, param2) {
  return param1 + param2;
};

add(1,2);

*/

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: Rock, Paper, Scissors - Let's play against the computer! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/
// Generate computer's choice
function generateComputerChoice() {
  // Generate a random number between 0 and 1
  const randomNumber = Math.floor(Math.random() * 1);

  // Map the random number to a choice
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
function game(userChoice, computerChoise) {
  if (userChoice === computerChoise) {
    return "its a tie!";
  } else if (
    (userChoice === "rock" && computerChoise === "scissors") ||
    (userChoice === "paper" && computerChoise === "rock") ||
    (userChoice === "scissors" && computerChoise === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
const userChoice = "paper";
const computerChoice = generateComputerChoice();
const result = game(userChoice, computerChoice);
console.log(result);
/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(startingNumber) {
  let count = startingNumber;

  return function () {
    if (count === 0) {
      return (
        "No more bottles of soda on the wall, no more bottles of soda, go to the store and buy some more, " +
        startingNumber +
        " bottles of soda on the wall"
      );
    } else {
      const currentCount = count;
      count--;
      return (
        currentCount +
        " bottles of soda on the wall, " +
        currentCount +
        " bottles of soda, take one down pass it around " +
        count +
        " bottles of soda on the wall"
      );
    }
  };
}

// Example usage
const sing = annoyingSong(5);
console.log(sing());
console.log(sing());
console.log(sing());
console.log(sing());
console.log(sing());
console.log(sing());
// console.log(sing());
