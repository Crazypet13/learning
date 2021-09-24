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
async function kerdes(){
 await rl.questionAsync("szeretnél kártyát?  y/n");
}

pullHand();
pullHand();
pullBank();
pullBank();
console.log("neked van " + hand + " kártyád");
console.log(`nekem van ${bank} kártyám`);
kerdes().then(async(a)=>{
  console.log(a);
  if (a === "y") {
    pullHand();
    console.log("neked van " + hand + " kártyád");
    if (hand >= 21) {
      console.log("Vesztettél");
      theEnd = true;
    } else {
      theEnd = false;
      await kerdes();
    }
  } else {
    theEnd = true;
  }
})

/*console.log("hello you have  "+kezdoKez+"  in your hand");
console.log("i have "+bank);
console.log("do you want to draw more?");
console.log("yes/no");
rl.question( function (answer) {
switch (answer){
  case "yes":console.log("you have",parseInt(randomNumber(1,11))+kezdoKez)
}});
console.log(card)*/