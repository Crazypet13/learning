const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

let kezdoKez = (parseInt(randomNumber(1,11))+parseInt(randomNumber(1,11)));
let bank =(parseInt(randomNumber(1,11))+parseInt(randomNumber(1,11)));

let draw = function(card){
  console.log(card)
 };
 const card = (parseInt(randomNumber(1,11)+kezdoKez))


//kezdoKez=(parseInt(randomNumber(1,11))+parseInt(randomNumber(1,11)));
//bank=(parseInt(randomNumber(1,11))+parseInt(randomNumber(1,11)));



console.log("hello you have  "+kezdoKez+"  in your hand");
console.log("i have "+bank);
console.log("do you want to draw more?");
console.log("yes/no");
rl.question( function (answer) {
switch (answer){
  case "yes":console.log("you have",parseInt(randomNumber(1,11))+kezdoKez)
}});
draw