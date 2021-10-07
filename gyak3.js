/*
function minMax(array){

    let kicsi = Math.min(...array);
    let nagy = Math.max(...array);
    let eredmeny = []
    eredmeny.push(kicsi);
    eredmeny.push(nagy);
    return eredmeny;
}
let arrayN = minMax([1,2,3,4,5,6,7,8,9,0]);
console.log(arrayN);



function  f(){
    return 60000; 
}
function g(){
    return 60000;
}
function withcIsLarger(f,g){
    if (f()>g()){
        return "f";
    }else if(g()>f()){
        return "g";
    }else{
      return "neither";
    }
}
console.log(withcIsLarger(f,g));







//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.


function allOfIt (number){
    let sum = 0;
    for (let i = 0;i<number;i++){
        sum = (sum + (i+1));
    }
    return sum;
}
let end = allOfIt(4);
console.log(end);

function allOfIt2 (number){
    let i = 0;
    let sum = 0;
    while (i<number){        
     sum = (sum + ++i);//irjad felül köcsög vagy kifüstöl a géped (legyen valos a while nak a kritériuma a belével elérhetö)
    }
    return sum;
}
let end2 = allOfIt2(4);
console.log(end2);


*/

//Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.

let box = "====b===O===e===U=A==";
let box2 = "";

function car(input) {
    let magicBox = input;
    let length = magicBox.length;
    let resoult = []
    if (length != 0) {
        for (let i = 0; i < length; i++) {
            if (magicBox[i] !== "=") {
                resoult.push(magicBox[i]);
            }
        }
        let numberOfCars = resoult.length;
        return resoult[numberOfCars - 1];
    }else{
        return "O.o dafuck!!";
    }
}

let theLastOne = car(box);
//console.log(theLastOne);
console.log(car(box2));