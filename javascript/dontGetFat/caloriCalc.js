module.exports = class Calori{
    #inaktive = null;
    #traning = null;
    #intTraning = null;
    genderRation = null;

    constructor(weigh,age,height){
        this.weigh = weigh;
        this.age = age;
        this.height = height;

        this.#inaktive = 1.3;
        this.#traning = 1.4;
        this.#intTraning = 1.6;
        this.genderRation = 5;
    }
    getWeigh(){
        return weight;
    }
    setWeigh(input){
        this.weigh = input;
    }

    getAge(){
        return this.age;
    }
    setAge(input){
        this.age = input;
    }

    getHeight(){
        return this.height;
    }
    setHeight(input){
        this.height = input;
    }

    getMinMax(){
       let min = (((this.weigh*9.99+this.height*6.25)-(this.age+5)*4.92)*0.85)*this.#inaktive;
       let max = ((this.weigh*9.99+this.height*6.25)-(this.age+5)*4.92)*this.#inaktive;  
       return [min,max];
    }

    getMaxCaloriInTake(){
       return ((this.weigh*9.99+this.height*6.25)-(this.age+5)*4.92)*this.#inaktive;
    }
    getMinCaloriInTake(){
       return (((this.weigh*9.99+this.height*6.25)-(this.age+5)*4.92)*0.85)*this.#inaktive;

    }    
    }