module.exports = class Foods{
    constructor(energia,fehérje,zsir,szénhidrát,suly){

        this.energia = energia;
        this.fehérje = fehérje;
        this.zsir = zsir;
        this.szénhidrát = szénhidrát;
        this.suly = suly;
    }
    getEnergia(waight){
        return this.energia*(waight/this.suly);
    }
    setEnergia(input){
        this.energia = input;
    }

    getFehérje (waight){
        return this.fehérje*(waight/this.suly);
    }
    setFehérje(input){
        this.fehérje = input;
    }

    getZsir(waight){
        return this.zsir*(waight/this.suly);
    }
    setZsir(input){
        this.zsir = input;
    }

    getSzénhidrát(waight){
        return this.szénhidrát*(waight/this.suly);
    }
    setSzénhidrát(input){
        this.szénhidrát = input;
    }

    getSuly(){
        return this.suly;
    }
    setSuly(input){
        this.suly = input;
    }

    getDateToWaight(waight){

        return [
            this.getEnergia(waight),
            this.getFehérje(waight),
            this.getZsir(waight),
            this.getSzénhidrát(waight),
        ]
    }
}