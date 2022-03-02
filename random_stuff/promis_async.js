const fs = require('fs');

function beolvas(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', function (error, data) {
            if (error) {
                reject('Hiba');
            }
            resolve(data);
        });
    });
}

(async function () {
    let data1 = await beolvas('test1.txt');
    let data2 = await beolvas('test2.txt');
    let data3 = await beolvas('test3.txt');
    console.log(data1);
    console.log(data2);
    console.log(data3);
})();






promisos:
beolvas('test1.txt').then((data)=> {
    console.log(data);
    beolvas('test2.txt').then((data)=> {
        console.log(data);
        beolvas('test3.txt').then((data)=> {
            console.log(data);
        });
    });
});