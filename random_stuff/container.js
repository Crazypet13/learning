/*let doboz = [2, 3, 42, 69, 8, 5];
let sajt = doboz.length;
for (i = 0; i < sajt; i++) {
    console.log(doboz[i]);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!" + i)
}
*//*
let numberOfTrue = 0
let doboz = [false, true, true, true, false, false];
let sajt = doboz.length;
for (i = 0; i < sajt; i++) {
    if (doboz[i] === true) {
        numberOfTrue = numberOfTrue + 1
    }else if(i===(sajt-1) && numberOfTrue===0){
    console.log("0")
    }else if(i===(sajt-1) && numberOfTrue!=0){
        console.log(numberOfTrue)
    }
}*/
function countTrue(arr) {
    let numberOfTrue = 0;
    let sajt = arr.length;
    for (i = 0; i < sajt; i++) {
        if (arr[i] === true) {
            numberOfTrue = numberOfTrue + 1;
        }
    }
  arr[2] = "lofasz"  
    console.log(numberOfTrue);
}

let doboz = [false, true, true, true, false, false]
countTrue(doboz);
console.log(doboz[2])