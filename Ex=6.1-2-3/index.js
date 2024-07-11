
///////Exercise 6.1
// 1. Create a function that takes two parameters, adds the parameters together, and returns the result.
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// 2. Set up two different variables with two different values.
let number1 = 55;
let number2 = 10;

// 3. Use your function on the two variables, and output the result using console.log.
let result1 = addTwoNumbers(number1, number2);
console.log(`The result of adding ${number1} and ${number2} is: ${result1}`);

// 4. Create a second call to the function using two more numbers as arguments sent to the function.
let result2 = addTwoNumbers(7, 3);
console.log(`The result of adding 7 and 3 is: ${result2}`);




///////Exercise 6.2
// 1. Create an array of descriptive words.
let descriptiveWords = ["brilliant", "beautiful", "pretty", "intelligent", "amazing", "stunning", "incredible"];

// 2. Create a function that contains a prompt asking the user for a name.
function describeName() {
    let name = prompt("Please enter a name:");

    // 3. Select a random value from the array using Math.random.
    let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    let randomWord = descriptiveWords[randomIndex];

    // 4. Output into the console the prompt value and the randomly selected array value.
    console.log(`${name}, You are so ${randomWord} !`);
}

// 5. Invoke the function.
describeName();




//////////// Exercise 6.3
// Step 1: Define two variables with number values
let addNum1 = 10;
let addNum2 = 5;

// Step 2: Define a variable to hold the operator (+ or -)
let operator = '+';

// Step 3: Create a function to perform addition or subtraction based on the operator
function calculate(calculateNum1, calculateNum2,operator) {
    if (operator == '+'){
return calculateNum1 + calculateNum2
    } else if (operator == '-') {
        return calculateNum1 - calculateNum2
    }
    else {
    return `invalid operator`
    }
    
}

// Step 4: Call the function with console.log() to output the result
console.log(`Result of ${addNum1} ${operator} ${addNum2}:`, calculate(addNum1,addNum2,operator));

// Step 5: Update the operator and call the function again
operator = '-';
console.log(`Result of ${addNum1} ${operator} ${addNum2}:`, calculate(addNum1,addNum2,operator));
