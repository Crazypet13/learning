// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them. 
//megint tul akarom komplikálni-.- de nagyon XD(akartem terminált amibe beadadot a valuét és ot kikeresi a  számot és ugy baszkodik :P)

function time (hour,minutes) {
    return ((hour*(60*60))+(minutes*60)+" seconds");
    
    } 
let time1 = time(5,39);
console.log(time1);

function osszeAd (a,b){
return a+b;
}
let a12 = osszeAd(2,10);
let qwe=osszeAd(a12,2);
console.log(qwe);





//Create a function that takes a string and returns it as an integer.


function number (string){
    return parseInt(string);
}
let number31 = "500";
console.log(number31);
let a1 = number(number31);
console.log(a1);
console.log(number31);
//ne akarj minden felülirni :3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 //csak arrow function!!!!!!In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.1
/*

 function add2(x) {
	return x + 2;
}
let add2 = (x) => {return x + 2}

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
    return box[length-1];
}
let box2 = lastOne([5,6,8,7,69]);
console.log(box2);
console.log(lastOne("sajtoskenyér"));


//Given a string, return true if its length is even or false if the length is odd.


function evenOrNot(string){
x = string.length;
return (x%2 == 0);
}
let asd123 = evenOrNot("sajto");
console.log(asd123);

//Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

// :/ hmmmmm 

//how the fuck date works-.-


function xmas(date){
    return (date.getMonth()===11 && date.getDate()== 24);
}
let asd666 = xmas(new Date(2021,11,24));
console.log(asd666);


//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function biggerOrNot(number1){
    let number69;
    number69 = parseInt(number1);
    return (number69<=0);
}
let asd = biggerOrNot(-20);
console.log(asd);


//Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

function szog (many){
let kifli = parseInt(many); //csak mert ha a fasz string ként addja be tudom hogy fölösleges meg a felsöbe is
   return ((kifli - 2) * 180+"°");
}
console.log(szog(5));

//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.fasznak akarod tul komplikálni a mindent is:3

function kosar (twoPoint,threePoint){
    let twoPoint2= parseInt(twoPoint);
    let threePoints3 = parseInt(threePoint);
    let score = (twoPoint2*2)+(threePoints3*3);
    return score;
}
let kif = kosar(1,1);
console.log(kif);



//A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.


/* eredeti code
function nameString(name){
	var b = "Edabit"
	var result == name + b
  	return result
}*/

function nameString(name,Edabit){
let result = (name+" "+Edabit);
 return result;
}

let asd456 = nameString("fuck","you!");
console.log(asd456);

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.


function stuff(n1,n2){
    let n3
    if (n1<100 && n2 <100) {n3 = true
    }else n3 = false
    return console.log(n3)
}
stuff(50,60)
stuff(80,101)


function longString (...numbers){
    let all = numbers.length
    let result =0
    for (let i = 0;i<all;i++){
    result = result + numbers[i]
    }
    return result
}
let nums = longString(1,2,3);
console.log(nums);

let hazSzam = 4;
let haz = 6;
let sokhaz = haz+((haz-1)*(hazSzam-1));
console.log(sokhaz);


