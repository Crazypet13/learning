// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them. 
//megint tul akarom komplikálni-.- de nagyon XD(akartem terminált amibe beadadot a valuét és ot kikeresi a  számot és ugy baszkodik :P)

function time (hour,minutes) {
    return console.log((hour*(60*60))+(minutes*60)+" seconds");
    } 
time(5,39);









//Create a function that takes a string and returns it as an integer.


function number (string){
    return console.log(string = parseInt(string));
}
number("500")



 //csak arrow function!!!!!!In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.1
/*

 function add2(x) {
	return x + 2;
}
add2(x) => {return x + 2}

function add3(x) {
	return x + 3;
}

add3(x) => {return x + 3}

function add5(x) {
	return x + 5;
}

add5(x) => {return x + 5}

function add7(x) {
	return x + 7;
}

add7(x) => {return x + 7}

function add11(x) {
	return x + 11;
}
add11(x) => {return x + 11}
*/


//Create a function that accepts an array and returns the last item in the array.


function lastOne(box) {
    let length = box.length;
    return console.log(box[length-1]);
}
lastOne([5,6,8,7,69])


//Given a string, return true if its length is even or false if the length is odd.


function evenOrNot(string){
x = string.length;
if (x%2 == 0)
    return console.log(true);
else
	return console.log(false);
}

evenOrNot("sajto")





//Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

// :/ hmmmmm 