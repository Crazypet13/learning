//Create a function which returns the number of true values there are in an array.
//    Return 0 if given an empty array.
//All array items are of the type bool (true or false).
/*
let sample = [true, false, false, true, false];

function counter(sample) {
    let box = sample;
    let length = box.length;
    let numOfTrues = 0
    if (length == 0) {
        return 0;
    }else{
        for (let i = 0; i <= length; i++) {
            if (box[i] === true) {
                numOfTrues = numOfTrues + 1;
            }
        }
    
    }
return numOfTrues;
}
let a = counter(sample);
console.log(a);
*/

//Write a function redundant that takes in a string str and returns a function that returns str.


let str = "sajt";
let str2 = "kalács";
let str3 = "kifli";

function redundant(str) {
    function string1() {
        return str;
    }
    return string1;
}
/*
function welcome (){
    console.log("Hello :3")
}

function bev (){
    return (96+69);
}
function kiad (){
    return (100-20);
}
let a = redundant(str)()

function sx (a,b){
    console.log(a()-b());
}

sx(bev,kiad);
*/
/*
In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that returns if it's possible to earn a bonus when you roll the dice.*/
let mine = 2;
let frineds = 8;

function canIrichIt(myStatus, myFriend) {
    let b = myFriend
    let a = myStatus
    if (myFriend > 0 && myStatus > 0) {
        if (myFriend === myStatus) {
            return false;
        } else if ((b - a) <= 6 && (b - a) > 0) {
            return true;
        } else {
            return false;
        }
    } else {
        console.log("wrong data!");
    }

}
console.log(canIrichIt(mine, frineds));