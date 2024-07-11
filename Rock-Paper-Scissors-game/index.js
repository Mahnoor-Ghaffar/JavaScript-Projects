
const choices = ["Rock", "Paper", "Scissors"];
const playerChoiceIndex = Math.floor(Math.random() * 3);
const computerChoiceIndex = Math.floor(Math.random() * 3);

let resultMessage = `Player chose ${choices[playerChoiceIndex]}. Computer chose ${choices[computerChoiceIndex]}. `;

//condition to handle player and computer selections
if (playerChoiceIndex === computerChoiceIndex) {
    resultMessage += "It's a tie!";
} else if (
    (playerChoiceIndex === 0 && computerChoiceIndex === 2) ||
    (playerChoiceIndex === 1 && computerChoiceIndex === 0) ||
    (playerChoiceIndex === 2 && computerChoiceIndex === 1)
) {
    resultMessage += "Player wins!";
} else {
    resultMessage += "Computer wins!";
}
alert(resultMessage);