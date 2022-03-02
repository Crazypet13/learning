let hivasNaplo =
    [['+3-6-3-0-5-0-3-2 6-6-6', 69],
    ['2-212-34343 55', 320],
    ['62-333-3434 67', 50000],
    ['322121-212', 30],
    ['36-30 503 2666', 10],
    ['2 212 34343-55', 51]]


//1. beszéd idötartam összes :3

function numberOne() {
    let osszhivas =
        (hivasNaplo[0][1]
            + hivasNaplo[1][1]
            + hivasNaplo[2][1]
            + hivasNaplo[3][1]
            + hivasNaplo[4][1]
            + hivasNaplo[5][1]);

    //console.log(osszhivas);
    let allCall = hivasNaplo[0][1];
    for (let i = 1; i < hivasNaplo.length; i++) {
        allCall = allCall + hivasNaplo[i][1]
    }
    console.log(allCall);

    for (let i = 0; i <= 5; i++) {
        // console.log(hivasNaplo.length);
    }
}

//2.first called number how many time is it called ,(ring ring hellooooooo:3) 

function numberTwo() {
    let resolt = 'lof@sz'.replace(/@/g, '').replace('@', '').replace('@', '').replace('@', '')
    console.log(resolt)

    let tisztaszamok = []

    for (let i = 0; i < hivasNaplo.length; i++) {
        tisztaszamok[i] = (hivasNaplo[i][0].replace(/\+/g, '').replace(/ /g, '').replace(/-/g, ''));//=>regular expresion :3 
        console.log(tisztaszamok);
    }
    let darab = 1
    for (let i = 1; i < tisztaszamok.length; i++) {
        if (tisztaszamok[0] === tisztaszamok[i]) {
            darab++//increment
        }
    }
    console.log(darab)
}

//3. utolszként hivott számot legelöször hénypercig dumcsiztunk
function thirdOne() {
    let tisztaszamok = []
    for (let i = 0; i < hivasNaplo.length; i++) {
        tisztaszamok[i] = (hivasNaplo[i][0].replace(/\+/g, '').replace(/ /g, '').replace(/-/g, ''));
    }

    let lastNumber = tisztaszamok[tisztaszamok.length - 1]
    /*
    let rightRow = 0
    
    for (;(rightRow < tisztaszamok.length&&lastNumber!==tisztaszamok[rightRow]); rightRow++){
    }
    
    
    
    for (let i = 0; i < tisztaszamok.length; i++) {
        rightRow = i
        if (lastNumber === tisztaszamok[i]) {
            break
        }
    }
    */
    let rightRow = 0

    while (rightRow < tisztaszamok.length && lastNumber !== tisztaszamok[rightRow]) {
        rightRow++
    }

    console.log(hivasNaplo[rightRow][1]);
}

//4.irjuk ki a számoka amikert hivtunk ++++ menyit beszéltünk azzal az adott számmal

//dubble 'for'cicle
function cicles() {
    let calledSzamok = []

    for (let i = 0; i < tisztaszamok.length; i++) {
        let counter = 0
        for (let j = 0; j < calledSzamok.length; j++) {
            if (tisztaszamok[i] == calledSzamok[j]) {
                counter++
            }
        } if (counter === 0) {
            calledSzamok[calledSzamok.length] = tisztaszamok[i]
        }
    }
    console.log(calledSzamok)


    for (let i = 0; i < tisztaszamok.length; i++) {
        let counter = true
        let j = 0
        while (counter && (j < calledSzamok.length)) {
            counter = tisztaszamok[i] !== calledSzamok[j]
            j++
        }
        if (counter === true) {
            calledSzamok[calledSzamok.length] = tisztaszamok[i]
        }
    }
    console.log(calledSzamok)
}
()=>{
    let tisztaszamok = []
    let calledSzamok = []
    let times = []
    
    for (let i = 0; i < hivasNaplo.length; i++) {
        tisztaszamok[i] = (hivasNaplo[i][0].replace(/\+/g, '').replace(/ /g, '').replace(/-/g, ''));
    }
    
    for (let i = 0; i < tisztaszamok.length; i++) {
        let counter = 0
        for (let j = 0; j < calledSzamok.length; j++) {
            if (tisztaszamok[i] == calledSzamok[j]) {
                counter++
            }
        } if (counter === 0) {
            calledSzamok[calledSzamok.length] = tisztaszamok[i]
        }
    }
    
    for (i = 0; i < calledSzamok.length; i++) {
    
        for (let j = 0; j < hivasNaplo.length; j++) {
            if (calledSzamok[i] === (hivasNaplo[j][0].replace(/\+/g, '').replace(/ /g, '').replace(/-/g, ''))) {
                if (times[i] === undefined) {
                    times[i] = hivasNaplo[j][1]
                }else{
                    times[i] = times[i]+hivasNaplo[j][1]
                }
            }
        }
    }
    
    
    for (i=0;i<calledSzamok.length;i++){
      console.log(calledSzamok[i]+'   '+times[i])
    }
}

