let firstName = "Jackie";
let age = 29;

let lastName; // undefined
lastName = "Walker"; // assigned Value

// = assigned value

//+= will assign and add to value
age += 2;
firstName += 2;

//-= will assign a deducted value
//age -=2;
// *= will assign a multiplied value
//age *= 2;
// /- will assign a divied value
//age /= 3;

//Arithmetic
//+
newAge = 62 -5;
//let newAge = (age + 8);
//-
newAge = age +8;
//console.log(newAge);
//*
newAge = age * 20;
//console.log(newAge);
// /
newAge = 8 / 4;
//console.log(newAge);
//age = age + 8

// % (Remainder)

newAge = 2 % 4;
newAge = 2 % 2;

//console.log(age);
console.log(newAge);
console.log(firstName);

//Day 3

let word ="Yoshi";
let sentence = `Welcome, home ${word}!`
console.log ("characters in word: " + word.length);
console.log(sentence);

//startsWith()
// console.log(sentence.startsWith("Welcome")); //True
// console.log(sentence.startsWith("home")); //False
// console.log(startsWith("home", 8)); //True

//repeat ()

console.log (sentence.repeat(4));

//endsWith()
let sentence2 ="Hello World!"
//console.log(sentence2.endsWith("World!", 6 ))

// includes()

// console.log(sentence2.includes("World")); //True
// console.log(sentence2.includes("")); //True
console.log(sentence2.includes("H", 5)); //False
console.log(sentence2.includes("!", 5)); //True

//toUpperCase()
console.log(word.toUpperCase());

//toLowerCase()
console.log(sentence.toLowerCase());

//chartAt()
// console.log(sentence.chartAt(3))

//Alert
//alert("You have 20 unread messages!");

//Confirm
//let question = confirm("Would you like to sign up for your car extended warrenty?")

//console.log(question);

//Prompt
//let promptRandomNum = prompt("Pick a number from 1 to 10");
//alert(`You chose # $promptRandomNum`);
//alert(prompt);

// const WhatsYourSign = prompt ("What's your Zodiac Sign?");
let promptRandomNum = prompt("Pick a number from 1 to 8");
const zodiacSigns = ["Cancer", "Aquarius", "Aries", "Capircorn",
"Pisces", "Taurus", "Scorpio", "Sagitaruis"]; // 8

alert("Your future crush zodiac sign will be: " + zodiacSigns[promptRandomNum]);