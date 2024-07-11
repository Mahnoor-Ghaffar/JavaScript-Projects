//EX = 4.5
let prize = Number(prompt("Please select a number between 0 and 10"));
let outputMessage = "My Selection: ";

//Switch statement
let prizeMessage;
switch (prize) {
    case 0:
        prizeMessage = "You won a video Game!";
        break;
    case 1:
        prizeMessage = "You won a cycle!";
        break;
        //Use the switch break to add combined results for prize
    case 2:
    case 3:
        prizeMessage = "You won a ball & shoes!";
        break;
    case 4:
        prizeMessage = "You won a mug!";
        break;
    case 5:
        prizeMessage = "You won a T-shirt!";
        break;
    case 6:
        prizeMessage = "You won a water bottle!";
        break;
    case 7:
        prizeMessage = "You won a backpack!";
        break;
    case 8:
        prizeMessage = "You won a car!";
        break;
    case 9:
        prizeMessage = "You won a smartphone!";
        break;
    case 10:
        prizeMessage = "You won a laptop!";
        break;
    default:
        prizeMessage = "Invalid selection, please choose a number between 0 and 10.";
        break;
}

// 6. Output the message back to the user by concatenating your prize variable strings and the output message string
alert("You selected no " + prize + " - " + prizeMessage+"🎉");