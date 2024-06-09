const prompt = require("prompt-sync")({sigint: true});
let numberToBeGuessed = Math.floor(Math.random() * 100);
let chances = 0;
do {
  let gussedNumber = prompt("Guess the number between 1 and 100");
  if (gussedNumber == numberToBeGuessed) {
    console.log("You have guessed the number in ", chances, " chances and the number is ", numberToBeGuessed);
    break;
  } else if (gussedNumber < numberToBeGuessed) {
    console.log("Your guess is less then the numebr");
    chances++;
  } else {
    console.log("Your guess is greater then the number");
    chances++;
  }
} while (chances < 100);
