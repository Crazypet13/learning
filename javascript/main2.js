let obj = {
    a: 3,
    b: "Csacsi",
    c: true,
    d: {
        
        a: "nyégy",
        b: "Four"
    }
};
let obj2 = obj;
let lofasz = [];

obj.a++;
/*
    console.log(obj.b);
    console.log(obj.a);
    console.log(obj2.a);
*/
console.log(obj.d.a);

lofasz.push(obj.a);

console.log(lofasz);