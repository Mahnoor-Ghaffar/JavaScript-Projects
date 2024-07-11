
const dynamicNumber = 5;
let userNumber = Number(prompt("Please enter a number:"));

// comparing number
let resultMessage;
if (userNumber > dynamicNumber) {
    resultMessage = "The number you entered is greater than hidden number ." ;
} else if (userNumber === dynamicNumber) {
    resultMessage = "The number you entered is equal to " + dynamicNumber + ".";
} else {
    resultMessage = "The number you entered is less than hidden number.";
}
alert(resultMessage);
