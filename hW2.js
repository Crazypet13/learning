const readline = require('readline-promise').default
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});
let hand = 0;
let bank = 0;
let theEnd = false

let pullHand = () => {
  hand = hand + card(1, 11);
}
let pullBank = () => {
  bank = bank + card(1, 11);
}

function card(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
function kerdes() {
rl.questionAsync("szeretnél kártyát?  y/n").then((a) => {
    console.log(a);
    if (a === "y") {
      pullHand();
      console.log("neked van " + hand + " kártyád");
      if (hand >= 21) {
        console.log("Vesztettél");
        theEnd = true;
        return true;
      } else {
        theEnd = false;
        return false
      }
    } else {
      theEnd = true;
      return false
    }
  })
}
pullHand();
pullHand();
pullBank();
pullBank();
console.log("neked van " + hand + " kártyád");
console.log(`nekem van ${bank} kártyám`);
for (let katica = 1;katica <=5;katica++) {
    kerdes();
}

/*console.log("hello you have  "+kezdoKez+"  in your hand");
console.log("i have "+bank);
console.log("do you want to draw more?");
console.log("yes/no");
rl.question( function (answer) {
switch (answer){
  case "yes":console.log("you have",parseInt(randomNumber(1,11))+kezdoKez)
}});
console.log(card)*/