console.log("Hello World!");

/*
" " = double quotes
' ' = single quotes
` ` = backticks
*/

//VARIABLE Assignments
// const -constant variable value; it will not change, and get's upset when you do!

// const ssn = '0000';
// ssn = `000`; // Don't do - it won't work!
// console.log (`Your SSN # is ${ssn}`);

/* let - is the new var
var firstName ="Jacque"
firstName = "Jacqueline";
let firstName = "Jacque";
firstName ='Marc';
function greeting() {
    let firstName ="Bob";
    console.log(firstName);
}
*/

//let firstName = "Jacqueline";
//const greetingHeading = `Welcome, ${firstName}`;

//<section
{/* <h2>${sectionHeading}</h2>
<p>lorem</p> */}

// let firstName = "Jacque"
// let lastName = "Solano"
// //let fullName = fistName + lastName;
// let fullName = `${firstname} ${lastName}`;
// console.log(fullName)

// // Numbers can range from -90071992547 to 90071992547, Nan, Infinity
// let score = 10;
// let finalscore = 10 + 10;
// let finalScore2 = "10" + "10"; // This will not add since it isn't a number, it will concat as string

// console.log(finalScore, finalScore2);

// BOOLEAN - True and false, on and Off, yes or no, (1,0)

// let power = true;

// console.log(power ? "On" : "Off");


 // undefinded - value is not set; placeholder for value
// let mystery;
// console.log(mystery)

/*null - nothing

let nothing = null;

console.log(nothing);*/

//Big Int -very huge number, and you add and "n" to the value;

// let randomNumber = 22;
// let randomBigIntNumber = 22n;

//typeof - what the value primitive type is

//string, number, undefined, boolean

// console.log(typeof(randomBigInt))

//Symbol - unique value

// Symbol("hello there");
// Symbol("hello there");
// Symbol(3);

//Complex
//arrays
//objects

//Array

// // ARRAY - a list primitives
// cars - "honda", "jeep", "mozarati", "bmw"
// hobbies - "sewing"; "crochet", "gaming", "baking", "cooking"
//randomArray = "sewing", 23, true

let hobbies = [ "sewing", "crochet", "gaming", "baking", "cooking"];
console.log(typeof(hobbies), hobbies[4]);

//object - allows you to structure an "object" to describe items

//Day 2 IN CLASS Challenge

let longWord = "Supercalifragilisticexpialidocious";
// console.log(longWord.length);
let howManyLettersinWord = longWord.length;

console.log(`How many letters are in ${longWord}: ${howManyLettersinWord}`);