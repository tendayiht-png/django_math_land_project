// ---------------------------------------
// IF STATEMENT NUMBER 1

// console.log("The if statement file is working!")

let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}








// ---------------------------------------
// IF STATEMENT NUMBER 2

let isLoggedIn = true;

if (isLoggedIn) {
  console.log("User is logged in");
}

// ---------------------------------------
// IF STATEMENT NUMBER 3

let score = 75;

if (score >= 50) {
  console.log("You passed the test");
}

// ---------------------------------------
// IF STATEMENT NUMBER 4

let hasAccess = true;

if (!hasAccess) {
  console.log("Access denied");
}
// The ! not operator reverses, or negates, the value of a boolean as below:
let excited = true;
console.log(!excited); 

let sleepy = false;
console.log(!sleepy);



if (hasAccess) {
  console.log("Access granted");
}




// ---------------------------------------
// IF STATEMENT NUMBER 5

let temperature = 30;

if (temperature > 25) {
  console.log("It's a hot day");
}

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
  } else {
    console.log('We can eat later!');
};

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}
// Codecademy ref: When using the && operator, both conditions must evaluate to true for the entire condition to evaluate
// to true and execute. Otherwise, if either condition is false, the && condition will evaluate to false
// and the else block will execute.

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}
// Codecademy ref: When using the || operator, only one of the conditions must evaluate to true for the overall statement
// to evaluate to true. In the code example above, if either day === 'Saturday' or day === 'Sunday' 
// evaluates to true, the if condition will evaluate to true and its code block will execute.// If the
// first condition in an || statement evaluates to true, the second condition won’t even be checked. 
// Only if day === 'Saturday' evaluates to false will day === 'Sunday' be evaluated. // The code in the 
// else statement above will execute only if both comparisons evaluate to false.

let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true


// IF STATEMENT NUMBER 6
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else { 
  console.log('not bedtime yet');
}

The list of falsy values includes:
<ul>li>0</li>
<li>empty strings like "" or ''</li>
<li>null, which represents when there is no value at all</li>
<li>undefined, which represents when a declared variable lacks a value</li>
<li>NaN, or Not a Number</li>
</ul>

Truthy and falsy values are important in JavaScript because they help determine the flow of control in
conditional statements like if...else. In these statements, JavaScript evaluates the condition to decide
which block of code to execute.
let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger
