function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
let kezdoKez = []
kezdoKez.push(parseInt(randomNumber(1,11))+parseInt(randomNumber(1,11)))
console.log(kezdoKez);