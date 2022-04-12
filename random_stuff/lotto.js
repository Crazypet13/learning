//1. 5 ös lotto szám generálás
//2. növekvö sorrendbe
//3. O.o????? átlag / hány páros hány páratlan /legkisseb legnagyobb
//4. 

// let x = Math.floor((Math.random() * 90) + 1);
let winnigNummers = []
let winnigNummersSequence = []
let summary = 0
let firstEvenSecondOdd = [0, 0]
let evenNumberIndex = 0
let oddNumberIndex = 1
let firstSmallsecondBig = [0, 0]

for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor((Math.random() * 90) + 1);
    while (winnigNummers.indexOf(randomNumber) !== -1) {
        randomNumber = Math.floor((Math.random() * 90) + 1)
    }
    winnigNummers[i] = randomNumber;

};

console.log(winnigNummers)

let bubbleSort = (inputArrey) => {
    let length = inputArrey.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (inputArrey[j] > inputArrey[j + 1]) {
                let cup = inputArrey[j];
                inputArrey[j] = inputArrey[j + 1];
                inputArrey[j + 1] = cup;
            }
        }
    }
    return winnigNummersSequence = inputArrey;
};
bubbleSort(winnigNummers)
console.log(winnigNummersSequence)


for (let i = 0; i < winnigNummersSequence.length; i++) {
    summary = summary + winnigNummersSequence[i];
}
console.log(`the number summery is ${summary}`)

for (let i = 0; i < winnigNummersSequence.length; i++) {
    if (winnigNummersSequence[i] % 2 === 0) {
        firstEvenSecondOdd[0]++
    } else {
        firstEvenSecondOdd[1]++
    }
}
console.log(`there is ${firstEvenSecondOdd[0]} even number and ${firstEvenSecondOdd[1]} odd number`)

firstSmallsecondBig [0] = winnigNummersSequence[0]
firstSmallsecondBig [1] = winnigNummersSequence[winnigNummersSequence.length-1] 

console.log(`the smallest number is ${firstSmallsecondBig[0]} and the biggest is ${firstSmallsecondBig[1]} `)



//magic number :3 

//kodban olyan kifejezés ami bele van égetve

//nyers adatbol is tudsz nyers addatá menni => [ 89, 78, 60, 14, 44 ] => [ 14, 44, 60, 78, 89 ] a !KIMUTATÁSOKAT! nem illik []-be rakni the number summery is !285! => let summm = 285  rakd már külön  változoba
//CLAS... :/ ehhh majd lassan :3
