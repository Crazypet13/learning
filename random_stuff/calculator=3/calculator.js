let eredmeny = "";

function clickone(valami) {
    try{
        eredmeny = eredmeny + valami;
    console.log(eredmeny);
    document.getElementById("eredmenyJelzo").innerText = eredmeny;
    }
    catch(bigFuckingProblem){
        eredmeny = "0";
        console.error(bigFuckingProblem);
    }
}

function endEredmeny() {
    try{
        eredmeny = eval(eredmeny);
    document.getElementById("eredmenyJelzo").innerText = eredmeny;
    eredmeny = eredmeny.toString();
    }
    catch(realyBigFuckingProblem){
        eredmeny = "0";
        console.error(realyBigFuckingProblem);
    }
}