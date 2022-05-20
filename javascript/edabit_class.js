/* test one
Create a class that takes the following four arguments for a particular football player:

    name
    age
    height
    weight

Also, create three functions for the class that returns the following strings:

    getAge() returns "name is age age"
    getHeight() returns "name is heightcm"
    getWeight() returns "name weighs weightkg"
    

    class Player_info {
        constructor(name,age,height,weight){
            this.name = name;
            this.age = age;
            this.height = height;
            this.weight = weight;
        }
        getAge(){
            return this.name+" is age "+this.age+"\n"
        }
        getHeight(){
            return this.name+" is "+this.height+"cm \n"
        }
        getWeight(){
            return this.name+" weighs "+this.weight+"kg \n"
        }  
    }

let test1 = new Player_info ("Csak Noris",60,300,3000);

console.log(
    test1,"\n",
    test1.getAge(),
    test1.getHeight(),
    test1.getWeight()
    );

done:3
*/
//-----------------------------------------------------------------------------------------------------------------
/*
test 2
Create functions for the Calculator class that can do the following:

    Add two numbers.
    Subtract two numbers.
    Multiply two numbers.
    Divide two numbers.


class Calculator{
    constructor(numberOne,numberTwo){
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }
    AddNumbers(){
        return this.numberOne+this.numberTwo
    }
    SubtractNumber(){
        return this.numberOne-this.numberTwo
    }
    MultiplyNumber(){
        return this.numberOne*this.numberTwo
    }
    DivideNumber(){
        return this.numberOne/this.numberTwo
    }
}

let numberStuff = new Calculator(10,2);
console.log(
numberStuff.AddNumbers(),
numberStuff.SubtractNumber(),
numberStuff.MultiplyNumber(),
numberStuff.DivideNumber()
)


done:3 or is it?
class Calculator{
    constructor(numberOne,numberTwo){
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
        if (typeof numberOne !== 'number'){
            console.log("számot agyá meg")
            this.numberOne = 0
        }else if(numberOne === NaN){
            console.log("balfaszvaaaagggggy~~~~~<3")
            this.numberOne = 0
        }
        if (typeof numberTwo !== 'number' || numberTwo === NaN){
            console.log("számot agyá meg")
            this.numberTwo = 0
        }
    }
    AddNumbers(){
        return this.numberOne+this.numberTwo
    }
    SubtractNumber(){
        return this.numberOne-this.numberTwo
    }
    MultiplyNumber(){
        return this.numberOne*this.numberTwo
    }
    DivideNumber(){
        return this.numberOne/this.numberTwo
    }
}

let numberGonosz = new Calculator(2,"banánturmix")
console.log(numberGonosz.MultiplyNumber());
now its done
*/
//---------------------------------------------------------------------------------------------------------------------------
/*test3
Write a class called Point that represents a point in two-dimensional. It should have the following constructor:

constructor(x, y)

It should have the following properties:

x

y

It should have the following methods:

toString()

    Returns a string representation of this point, as [x=1, y=2].


class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return `[x=${this.x}, y=${this.y}]`
    }
}

let itHasNoPoint = new Point(6,9);

console.log(itHasNoPoint.toString());

*/
//-------------------------------------------------------------------------------------------------------------------
/*test4 new stuff # help? # class data hosszáadás és változtatás<3

Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:
BasicPlan	StandardPlan	PremiumPlan
✓	✓	✓	canStream
✓	✓	✓	canDownload
✓	✓	✓	hasSD
    ✓	✓	hasHD
        ✓	hasUHD
1	2	4	numOfDevices
$8.99	$12.99	$15.99	price

class BasicPlan{
    _price;
    constructor(){
        this.canStream = true;
        this.canDownload = true;
        this.hasSD = true;
        this.hasHD = false;
        this.hasUHD = false;
        this.numberOfDevices = 1;
        this._price = 8.99
    }
    itCanStream(){
        return this.canStream
    }
    itHasHD(){
        return this.hasHD
    }
    itHasUHD(){
        return this.hasUHD
    }
    howManyDevices(){
        return this.numberOfDevices
    }
    howManyMony(){
        return this._price+"money"
    }
}

class StandardPlan extends BasicPlan{
    constructor(){
        super();
        this.hasHD = true;
        this.numberOfDevices = 2;
        this._price = 12.99;
    }
}
class PremiumPlan extends StandardPlan{
    constructor(){
        super();
        this.hasUHD = true
        this.numberOfDevices = 4;
        this._price = 15.99;
    }
}

let csoki = new PremiumPlan();
*/
//---------------------------------------------------------------------------------------------------
/*test5
Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

    Form the fullname by simply joining the first and last name together, separated by a space.
    Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.

class Employee {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
        this.firstnameLow = firstname.toLowerCase();
        this.lastnameLow = lastname.toLowerCase();
        this.fullname = `${this.lastname} ${this.firstname}`;
        this.email = `${this.firstnameLow}.${this.lastnameLow}@company.com`;
    }
    //getFullname(`${this.firstname} ${this.lastname}`); constructorba van ide?:/???
}

let test1 = new Employee("Péter", "Magyar");
console.log(test1);

//-----------------------------------------------------------------------------------------------------------------
/*test6
Create a method in the Person class which returns how another person's age compares.
 Given the instances p1, p2 and p3, which will be initialised with the attributes name and age,
  return a sentence in the following format:
{other person name} is {older than / younger than / the same age as} me. ??????össze hasollítani több objectett? 

*/
/*
class Person {
        #same = " is the same age as me.";
        #older = " is older than me.";
        #younger = " is younger than me.";
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
    compareTo(other){
        let cica;
        if (this.age === other.age){
            cica = this.#same;
        }else if(this.age < other.age){
            cica = this.#older;
        }else{
            cica = this.#younger;
        }
        console.log(other.name+cica)
    }
}

let p1 = new Person("Samuel", 24);
let p2 = new Person("Joel", 36);
let p3 = new Person("Lily", 24);

p1.compareTo(p2);
p2.compareTo(p1);
p1.compareTo(p3); 
*/
//--------------------------------------------------------------------------------------------------------------------------------
/*test7 random bs körök:3

class Circle{
    #sugar
    constructor(sugar){
        this.#sugar = sugar;
    }
    getSuger(){
        return this.#sugar;
    }
    setSugar(change){
        this.#sugar = change;
    }
    getTerulet(){
        console.log(`ezzel nem számolom ki a területet ${this.#sugar}`);
    }
    getKerulet(){
        console.log(`ezzel nem számolom ki a kerületet ${this.#sugar}`);
    }
}

 let nagyCica = new Circle(69);
 nagyCica.getTerulet();
 nagyCica.setSugar(100);
 nagyCica.getKerulet();
 console.log(nagyCica.getSuger());
 */

 /*test 8
  Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

    An attribute called fullname which returns the first and last names.
    An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.

Remember to allow the attributes fname and lname to be accessed individually as well.
*/
//https://www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/
/*
class Name {
    constructor(fname,lname){
        this.fname = fname;
        this.lname= lname;
    }
    getFullname(){
        return this.fname+this.lname;
    }
    getMonogramm(){
        let monogrammFname = this.fname.charAt(0);
        let monogrammLname = this.lname.charAt(0);
        return `${monogrammFname}.${monogrammLname}`;
    }
    getFname(){
        return this.fname;
    }
    getLname(){
        return this.lname;
    }
    setFname(fname){
        this.fname = fname;
    }
    setLname(lname){
        this.lname = lname;
    }
}
*/
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static displayName = "Point";
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  p1.displayName; // undefined
  p1.distance;    // undefined
  p2.displayName; // undefined
  p2.distance;    // undefined
  
  console.log(Point.displayName);      // "Point"
  console.log(Point.distance(p1, p2)); // 7.0710678118654755

  console.log(p1.displayName);
  
  class Calculator{
     static add(numberOne,NumberTow){
         return numberOne+NumberTow
     }
  }
let cica = Calculator.add(6,9)
  console.log(cica)

let BS = new Calculator()
console.log(BS.add(6,9))

let kutya = function (a,b){
return a+b
}

exports.Calculator = Calculator;
exports.kutya = kutya;
exports.béla = new Calculator();

