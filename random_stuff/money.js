const nasi = 10;
let munyA = 10;
let munyB = 11;
let munyC = 9;
let munyD = -200;
let munyE = undefined;
let munyF = 'hámusz';
let munyG = false;
let munyH = NaN;
let munyI = true;
let munyJ = [];
let munyK = {};
let munyL = null;
let munyM = '';
let munyN = 1 / 5;
let munyO = () => { };
let munyP = 'class(-.-)';
let muny = [3.20, 0, 0, 0];


function pocketInMyMuny(love) {
    let x = (love[0] * 1
        + love[1] * 0.10
        + love[2] * 0.05
        + love[3] * 0.01);
    console.log(x)
    return x
}

function canIBuySomeCake(cash, noms) {
    let sum = pocketInMyMuny(cash)
    if (sum >= noms) {
        console.log(true);
    } else { console.log(false) }
}
/*
function canIBuySomeCake(cash, noms) {
    let sum = pocketInMyMuny(cash)
        console.log((sum >= noms));
}
*/

canIBuySomeCake(muny, nasi);

