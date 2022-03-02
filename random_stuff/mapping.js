let map =
    [[1, 2, 5, 3, 2, 1],
    [1, 2, 3, 4, 2, 3],
    [4, 3, 6, 4, 3, 3],
    [4, 6, 4, 5, 7, 4],
    [2, 5, 4, 4, 4, 5],
    [5, 3, 2, 5, 5, 3]]

/*
1.hány elem van 5 felett
2.hol van a legmagasabb pont
3.menyi az átlag
4.határozz meg egy magasságot aminél nem alacsonabb mint nem magasabb 5000 < = 1 = < 5000 '36 változo páratlannak kellene hogy legyen hogy meg lehessen oldani hogy ugyan anyi nem kevesebb és nem nagybb van (maybe)'
*/


function problemOne() {
    let fivePlusses = 0;

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] >= 5) {
                fivePlusses++;
            }
        }
    }
    console.log(fivePlusses);
}

function problemTwo() {
    let highestNumberCordinate = [0, 0];
    let highestNumber = 0;

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] > highestNumber) {
                highestNumber = map[i][j];
                highestNumberCordinate[0] = i;
                highestNumberCordinate[1] = j;
            }
        }
    }
    console.log(highestNumberCordinate + '      ' + highestNumber)
}

function problemThree() {
    let summ = 0;
    let pices = 0;


    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            summ = summ + map[i][j];
            pices++;
        }
    }
    console.log(summ / pices);
}

let szamsor = []
let theRightNumber = 0;

for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
        let stopNumberInWhile = 0
        let hammerTime = true
        hossz = szamsor.length
        let k = 0 
        if (map[i][j] >= szamsor[hossz - 1]) {
            szamsor[hossz] = map[i][j];
        } else {
            while (k < szamsor.length && hammerTime) {
                if (szamsor[k] > map[i][j]) {
                    stopNumberInWhile = szamsor[k]
                    hammerTime = false
                    stopNumberInWhile = k
                }
                k++
            }
            for (let l = szamsor.length; l > stopNumberInWhile; l--) {
                szamsor[l] = szamsor[l - 1]
            }
            szamsor[stopNumberInWhile] = map[i][j]
        }
    }
}

function matekosSzar(){
    //szamsor[szamsor.length]=1000
    if (szamsor.length%2 == 0){
        x=(szamsor.length/2)-1
        sajt=(((szamsor[x-1])+(szamsor[x]))/2)
        console.log(sajt)
    }else{
        x=(szamsor.length/2)-1
        x = Math.round(x)
        console.log(szamsor[x])
    }

}
matekosSzar()
