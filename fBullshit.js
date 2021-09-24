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
async function kerdes() {
  let valasz = await rl.questionAsync("szeretnél kártyát?  y/n");
  if (valasz === "y") {
    pullHand();
    console.log("neked van " + hand + " kártyád");
    if (hand >= 21) {
      console.log("Vesztettél");
      theEnd = true;
      return ;
    } else {
      theEnd = false;
      return await kerdes();
    }
  } else {
    theEnd = true;
    return ;
  }
}

pullHand();
pullHand();
pullBank();
pullBank();
console.log("neked van " + hand + " kártyád");
console.log(`nekem van ${bank} kártyám`);
kerdes();