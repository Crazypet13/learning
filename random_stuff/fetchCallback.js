const fetchUrl = require("fetch").fetchUrl;

let myFetch = (Url) => {
    return new Promise((resolve, reject) => {
        fetchUrl(Url, function (error, meta, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
}

function displayUi(szoveg) {
    return ('valami' + szoveg);
};


myFetch('https://soundcloud.com/discover')
.then((lofasz) => {
    let data = displayUi(lofasz)
    return data
});



myFetch('https://soundcloud.com/discover')
.then((lofasz) => {
    return displayUi(lofasz)
});

myFetch('https://soundcloud.com/discover')
.then((lofasz) => 
    displayUi(lofasz)
);


let data = myFetch('https://soundcloud.com/discover').then((lofasz) => displayUi(lofasz));

console.log(data);

console.log(myFetch('https://soundcloud.com/discover')
.then((lofasz) => {
    let data = displayUi(lofasz)
    return data
}));


let dataX = myFetch('https://soundcloud.com/discover')
.then((lofasz) => {
    let data = displayUi(lofasz)
    return data
});

myFetch('https://soundcloud.com/discover')
.then((lofasz) => {
    let data = displayUi(lofasz)
    return data
});


//myFetch('https://soundcloud.com/discover').then((lofasz)=>console.log(lofasz))

(async () => {
    console.log(await myFetch('https://soundcloud.com/discover'))
    console.log(await myFetch('https://soundcloud.com/discover'))
    console.log(await myFetch('https://soundcloud.com/discover'))
    console.log(await myFetch('https://soundcloud.com/discover'))
    let ertek = await myFetch('https://soundcloud.com/discover')
    ertek + 'sajt'
})();





async function createrHtml(){
let data = await myFetch('https://soundcloud.com/discover');
displayUi(data)};

(async function createrHtml(){
    let data = await myFetch('https://soundcloud.com/discover');
    displayUi(data)})();