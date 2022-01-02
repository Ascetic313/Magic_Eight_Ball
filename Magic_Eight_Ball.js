// Defining userName//
let userName = ''

// Using ternary expression//
userName? console.log(`Hello,
${UserName}!`): console.log('Hello!');

// Creating a variable name userQuestion//
let UserQuestion = 'What is Magic Eight Ball?'
console.log(`my name is ${userName} and my question is ${UserQuestion}`);

// Generating a Random Number//
let randomNumber = Math.floor(Math.random()*8);

// Creating another variable eightBall//
var eightBall = ''
if (randomNumber === 0) {eightBall = console.log('It is certain');}
else if (randomNumber === 1) {eightBall = console.log('It is decidedly so');}
else if (randomNumber === 2) {eightBall = console.log('Reply hazy try again');}
else if (randomNumber === 3) {eightBall = console.log('cannot predict now');}
else if (randomNumber === 4) { eightBall = console.log('Do not count on it');}
else if (randomNumber === 5) { eightBall = console.log('My sources says no');}
else if (randomNumber === 6) {eightBall = console.log('Outlook not so good');}
else if (randomNumber === 7) {eightBall = console.log('Signs point to yes');}

// Printing the value of the eightBall Answer//
console.log(`The magic eightBall Answered: ${eightBall}`)
