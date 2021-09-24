const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
let kezdoKez = []

kezdoKez=(parseInt(randomNumber(1,11))+parseInt(randomNumber(1,11)));


console.log("hello you have  "+kezdoKez+"  in your hand");
console.log("do you want to pull more?")
console.log("yes/no")
rl.question( function (answer) {
switch (answer){
  case "yes":console.log("you have",parseInt(randomNumber(1,11))+kezdoKez)
}});