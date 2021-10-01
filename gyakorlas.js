/* (()=>{}) ();// =iife inmidiatly invoaked function expresion
function sajt (hello,nev,nev2,nev3){  
    console.log(hello)
console.log(hello+" petya")
console.log("milyen napod van?")
} 
let hello = "csö"
console.log(hello)
console.log(hello+" petya")
console.log("milyen napod van?")

(function(){}) ()
sajt("csö","petya")
// + = konkatenácio(egyessítés össze fűzés)

*/

function welcome (name,welcomeMessage) {
console.log(welcomeMessage+" "+name);
return name
}









let message = welcome("peti","cső"); 
message = message+" milyen napod van";


welcome("Tibi","bon jour");

let season = "tavasz";
switch (season){
    case "tavasz":
    console.log('1');
    console.log("x");
    break;
    
    case "tél":
    console.log(2);
    break;
    
    case "nyár":
    console.log(3);
    break;
    
    case "ösz":
    console.log(4);
    break;
    default:
        throw Error ("FUCKYOU!")    
    }
    const katics = 1
for (let index = 0;index<10;index = index+katica){
}