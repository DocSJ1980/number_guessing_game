/* Number Guessing Game
This guess the number game is a short TypeScript/Node.js project that allows the user to guess the number generated by the computer. There are also several ways to alter the game, like adding more rounds or displaying the score. It’s quite simple and uses the random function to generate a number.

Create a GitHub repository for the project and submit its URL in the project submission form. */
// Import the random function from the built-in `math` module.
// Import the Inquirer package.
import inquirer from "inquirer";
// Create a function to generate a random number between 1 and 10.
function generateNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
// Create a function to play the game.
async function playGame() {
    // Generate a random number.
    const number = generateNumber();
    // Get the user's guess.
    const { guess } = await inquirer.prompt([
        {
            type: "number",
            name: "guess",
            message: "Guess a number between 1 and 10: ",
        },
    ]);
    // Check if the user's guess is correct.
    if (guess === number) {
        console.log("You guessed correctly!");
    }
    else {
        console.log(`Your guess was incorrect. The correct number was ${number}.`);
    }
    // Ask the user if they want to play again.
    const { playAgain } = await inquirer.prompt([
        {
            type: "confirm",
            name: "playAgain",
            message: "Do you want to play again?",
        },
    ]);
    // If the user wants to play again, call the `playGame()` function again.
    if (playAgain) {
        playGame();
    }
}
// Start the game.
playGame();
