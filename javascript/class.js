/*
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    area(){
       return this.height*this.width;
    }
  }
  
let sajt = new Rectangle(6,9);

let area= sajt.area();


console.log(area);

*/


class Recipe{
    #id;
    constructor(name,content,author){
        this.name = name;
        this.content = content;
        this.#id = this.name+69;
        this.author = author;
    }
    getId(){
        return this.#id;
    }
    getContent(){
        return "Recipe: "+this.content;
    }
}
/*
let makaroni = new Recipe("makaroni","tészta+húsgolyó","béla");
let sajtosTeszta= new Recipe("sajtos Tészta","sajt + tészta","jános");

console.log(makaroni.getId());
console.log(sajtosTeszta.getContent());

exports.Recipe = Recipe;

//https://edabit.com/challenges