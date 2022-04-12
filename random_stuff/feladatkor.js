/*
let odd = []
let array = [-8, 3, 14, null]


function isOddOrEven(number) {
    if ((number % 2) == 0) {
        console.log('Páros');
        return true
    } else {
        console.log('Páratlan');
        return false
    }
}

function mathProblem() {
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number'
        ) {
            console.log('Invalid data :  ' + array[i]);
        } else {
            let doINeedIt = isOddOrEven(array[i]);
            if (doINeedIt === false) {
                odd.push(array[i]);
            }
        }
    }
    console.log(odd);
}
mathProblem(array);


*/
// palindroma checking :3


let pali = 'ababa'

let hossz = pali.length


function isOddOrEven(length) {
    if ((length % 2) == 0) {
        console.log('Páros');
        return true
    } else {
        console.log('Páratlan');
        return false
    }
}

if (isOddOrEven(hossz) === true) {
    let needToFlipp = pali.slice(0, (hossz / 2));
    let needToChecking = pali.slice((hossz / 2), hossz);
    let reversedString = needToFlipp.split("").reverse().join("");
    if (reversedString == needToChecking) {
        console.log('IT IS palindroma!!! nice even');
    } else {
        console.log('IT IS NOOOOOOT');
    }
} else {
    let needToFlipp = pali.slice(0, (hossz / 2));
    let needToChecking = pali.slice((hossz / 2) + 1, hossz);
    let reversedString = needToFlipp.split("").reverse().join("");
    if (reversedString == needToChecking) {
        console.log('IT IS palindroma!!! nice odd');
    } else {
        console.log('IT IS NOOOOOOT');
    }
}



