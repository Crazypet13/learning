const Calori = require('./caloriCalc');
const Foods =require('./foodCalculator');

let peti = new Calori(150,27,186);
//köretek
let rizs = new Foods(357,7.1,0.7,80,100);
//alapanagok
let parPüré = new Foods(370,4,0.8,16,100);
let tej = new Foods(65,3.3,3.5,5.0,100);
let aszaltParadicsom = new Foods(79,3.9,0.9,10,100);
let szojaszósz = new Foods (80,6.1,0.5,12,100);
let cukor = new Foods(400,0,0,100,100);
let vHagyma = new Foods(40,1.1,0.1,7.6,100);
let FokHagyma = new Foods(149,6.4,0.5,31,100);
let burgonya = new Foods(90,1.8,0.1,19,100);
//husok
let csirkeComb = new Foods(119,19.5,3,9,0,100);
let császárvég = new Foods(218,18,16,0.4,100);


let daily1 = császárvég.getDateToWaight(250);
let daily2 = rizs.getDateToWaight(150);
let daily3 = tej.getDateToWaight(1000);

let daily = [];

for (let i = 0 ;i < 4;i++){
   daily.push(daily1[i]+daily2[i])
}

console.log(daily1,daily2,peti.getMinMax());


// 1 l tej 650 kcl (fehérje 33g / zsir 35g / szénhidrát 50g
// 120g császárvég és 150 g rizs 4* per 1 nap
