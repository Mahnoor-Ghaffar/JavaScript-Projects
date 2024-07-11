
let fName = prompt("Enter a name to check if they are a friend:");

//Switch statement
    switch (fName.toLowerCase()) {
        case 'elsa':
        case 'annie':
        case 'mano':
            alert(`${fName} is your friend ❤!`);
            break;
        default:
            alert(`You don't know ${fName}.`);
            break;
    }