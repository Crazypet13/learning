// x börtön ör + x cella 
//  ahanyadik ör (bob) azzal a számmal szorozva fel basztatja az ajtokat (x= 5minden 5 ödki ajtot)
//melyikeke vannak nyitva?





let cella = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let hossz = cella.length;
let sorszam = 1;

function bob(cella, sorszam) {
    if (cella[sorszam] == true) {
        cella[sorszam] = false;
    } else {
        cella[sorszam] = true;
    }
}

function patrol(hossz, sorszam, cella) {
    for (let i = 0; i < hossz; i++) {
        console.log(i%sorszam+" 1")
        if (i % sorszam == 0) {
            console.log(i+"  "+sorszam+" 2")
            bob(cella,i)
            console.log(cella+" "+sorszam+" 3")
        }
    }
}
patrol(hossz, sorszam, cella);
function borton (hossz, sorszam, cella){
    
}
