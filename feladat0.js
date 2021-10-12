// stringböl szed szét szavakra és ha páros/páratlan?? a szó irasd ki arreybe
/*
const string1 = "összesbe kért kicsit konplexebb debuggolos dolgokat hogy jelezzen a program ha rossz van irva vagy valami nem csak hogy lefut azt csö"

function wordSearch(str){
const words = str.split(" ");
let lengthOfWord = words.length;
let box = [];
for (let i = 0; i < lengthOfWord; i++) {
    if (words[i].length % 2 === 0) {
        box.push(words[i]);
    }
}
return box
}
let box2 =wordSearch(string1);
console.log(box2);
*/
//addot string be nézd meg hogy van e ismétlödö rész (betű)

const str2 = "abcbacdba";
const hossz = str2.length;
let hossz2 = hossz
let box = [];
let result = new Set();
/*
for (let i = 0; i < hossz; i++) {
    for (let j = i + 1; j < hossz; j++) {
        if (str2[i] === str2[j]) {
                                             result.add(str2);
                                                                                let isNeedPush = true;
                                                                                for (let k = 0; k < box.length; k++) {
                                                                                    if (box[k] !== str2[i]) {
                                                                                        isNeedPush = isNeedPush && true;
                                                                                    } else {
                                                                                        isNeedPush = false;
                                                                                    }
                                                                                }
                                                                                if (isNeedPush == true) {
                                                                                    box.push(str2[i]);
                            }
                        }
                    }
}
console.log(box);
*/

add




// perfect szám "1*2*3 = 1+2+3 = 6" az e a beadott szám ?
// bináris átválto program
// string fordítos 

//mindegyikbe volt olyan hogy kidbjon hibát ha nem megfelelöt adsz be //pl nem lehet 0 vagy csak pozitive vagy csak betük
//összesbe kért kicsit konplexebb debuggolos dolgokat hogy jelezzen a program ha rossz van irva vagy valami nem csak hogy lefut azt csö:3
