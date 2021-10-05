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

//how the fuck date works-.-


//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function biggerOrNot(number1){
number1= parseInt(number1);
   if (number1<=0){
       return console.log(true);
   }else{
        return console.log(false);
   }
}
biggerOrNot(-20)



//Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

function szog (many){
many= parseInt(many); //csak mert ha a fasz string ként addja be tudom hogy fölösleges meg a felsöbe is
   return console.log((many - 2) * 180+"°");
}
szog(5)

//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function kosar (twoPoint,threePoint){
twoPoint = parseInt(twoPoint)
threePoints = parseInt(threePoint)
let = score = (0);
console.log(twoPoint,threePoint)
score = score+((twoPoint*2)+(threePoints*3));
return console.log(score);
}
kosar(1,1)



//A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.


/* eredeti code
function nameString(name){
	var b = "Edabit"
	var result == name + b
  	return result
}*/

function nameString(name,Edabit){
let result
 result = (name+" "+Edabit);
 return console.log(result);
}

nameString("fuck","you!");


//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.


function stuff(n1,n2){
    let n3
    if (n1<100 && n2 <100) {n3 = true
    }else n3 = false
    return console.log(n3)
}
stuff(50,60)
stuff(50,101)