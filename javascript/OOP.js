class Cica{
    constructor(a,b,c,d,e,f,g){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.g = g;
    }
}

class CicaBuilder{
    setA(a){
        this.a = a;
        return this;
    }
    setB(b){
        this.b = b;
        return this;
    }
    setC(c){
        this.c = c;
        return this;
    }
    setD(d){
        this.d = d;
        return this;
    }
    setE(e){
        this.e = e;
        return this;
    }
    setF(f){
        this.f = f;
        return this;
    }
    setG(g){
        this.g = g;
        return this;
    }
    build(){
        return new Cica (this.a,this.b,this.c,this.d,this.e,this.f,this.g);
    }
}

let cirmos = new CicaBuilder()
    .setA('a')
    .setB('b')
    .setC('c')
    .setD('d')
    .setE('e')
    .setF('f')
    .setG('g')
    .build();

    console.log(cirmos);


    