// console.log(typeof "Hello World!");
// console.log(typeof "5");
// console.log(typeof 5.3);

// let a;
// console.log(a);

// let b = null;
// console.log(b);
// b = "Hello!"
// // const c = "Hello";
// console.log(c)
// c = "world!";
//typeof("hello world");
//typeof "hello string";


// let randomNumOne = Math.random();
// let randomNumTwo = Math.random();
// let randomNumThree = Math.random();

// console.log (`Random number one: ${randomNumOne}`);
// console.log (`Random number two: ${randomNumTwo}`);
// console.log (`Random number three: ${randomNumThree}`);


// console.log (Math.min(2,4,6,8,12));
// console.log (Math.max(8,4,12,29,45,0,-4));
// console.log (Math.random());
// console.log(Math.floor(3.5));
// console.log(Math.round(4.89));
// console.log (Math.PI);
// console.log(Math.SQRT2)
// console.log(Math.pow(2,3));
// console.log(Math.abs(-9));
// console.log(Math.log(10));

//Date Object Methods
// console.log("The date now: ",Date.now());
// //year month date
// console.log("Parsed: ", Date.parse("1994-08-17"));

// Math Methods
// const millenium = new Date ("2000-01-01")
// // console.log(millenium.getDate())
// // console.log(millenium.getFullYear())
// console.log(millenium.setDate(millenium.getDate()+ 1))
// console.log(millenium)
// console.log(millenium.setFullYear(millenium.getFullYear()- 2000));
// console.log(millenium)
// const today = new Date();
// console.log(today.getFullYear())

// let (powerIson) = false;
//Comparison Operators
// condition == condition - equal
//condition === condition - strict equal; value and type must be the same to be truthy
// condition != condition - Not equal (use strict not equal instead)
//condition !== condition strict Not equal
//condition < condition - less than
//condition > condition greater than
//condition >= condition- less than or equal to
//condition >= condition - greater than or equal to

// const age = new Date ("1993-02-01")
// console.log(age.setDate(age.getDate() + ));
// console.log(age);

// let age = 19;

// if(age < 21) {
//     document.body.style.backgroundColor = "orange";
//     const p = document.createElement("p");
//     p.textContent = "Sorry, you're not eligable to drink.";
//     documentFragment.body.appendChild(p);
// }
// else if (age > 21) {
//     document.body.style.backgroundColor = "orange";
//     const p = document.createElement("p");
//     p.textContent = "You're eligable to drink!.";
//     documentFragment.body.appendChild(p);
// }
// else {
//     document.body.style.backgroundColor = "orange";
//     const p = document.createElement("p");
//     p.textContent = "You're eligable to drink!.";
//     documentFragment.body.appendChild(p);
// }
// let a = 2;
// let b = 8;

// if (a === b) {
//     console.log("This is true!");
// } else {
//     console.log("This is Not true, it's false!");
// }
// if (powerIsOn) {
//     document.body.style.backgroundColor = "lightblue";
//     if (powerIsOn)
// }
// else{
//     document.body.style.backgroundColor = "coral"; //if false, do something
// 

// let word = "Hello!"

// if(word == "Hello!") {
//     console.log("This is true.")
// }
//     else if (word == "Hi") {
//     console.log("Another if,Hi there")
// }
// else {
//     console.log("This is false.")
// }

// && = AND
// = OR
// ! = Not

let customerAction = "purchase"

switch(customerAction) {
    case "purchase":
        console.log("Thank you for your purchase!");
        break;
    case "return":
        console.log("Where happy to return your item!");
        break;
    case "gift registry":   
    console.log("Thank you for registering your gift registry!");
    break; 
    default
}