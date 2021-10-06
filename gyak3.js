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