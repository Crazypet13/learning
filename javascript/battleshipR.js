class Game {
    //kordináták átadás Game => board,fugvények meghivása ,pontok számolása, 
    #board = null;
    shipPlacement = [];
    shotPlacement = [];
    constructor(shipPlacement, shotPlacement) {
        this.#board = new Board(shotPlacement);
        this.#board.ini18n(shipPlacement);
        this.#board.upgrade();
    }
    start() {
        this.#board.dakka();
    }
    score() {
        let bs = this.#board.getShips()
        let points = 0;
        for (let i = 0; i < bs.length; i++) {
            if (bs[i].amISunk() === true) {
                switch (bs[i].getMyType()) {
                    case "Scout":
                        points++;
                        break;
                    case "Cruser":
                        points = points + 3;
                        break;
                }
            }

        }
        console.log(points);
    }
}

class Board {
    //hajo készítés talán upgradélni,lövések küldése a hajoknak ,kordináták átirása 
    #shipdepo = [];
    ship = [];
    shot = [];
    constructor(shotsPlace) {
        this.shot = shotsPlace;
    }
    getOszlopszam(kordinata) {
        return parseInt(kordinata[1]) - 1;
    }
    getSorSzam(kordinata) {
        let theGoodOne = kordinata[0].toUpperCase()
        return theGoodOne.charCodeAt(0) - "A".charCodeAt(0);
    }
    fire(shipIndex, targetCord) {
        (this.#shipdepo[shipIndex]).lookForShot(this.getOszlopszam(targetCord), this.getSorSzam(targetCord));
    }
    dakka() {
        for (let i = 0; i < this.#shipdepo.length; i++) {
            for (let j = 0; j < this.shot.length; j++) {
                this.fire(i, this.shot[j]);

            }
        }
    }
    factory(quackin) {
        this.#shipdepo.push(
            new ShipLittle(
                this.getOszlopszam(quackin),
                this.getSorSzam(quackin)));
    }
    ini18n(orders) {
        for (let i = 0; i < orders.length; i++) {
            this.factory(orders[i]);
        }
    }
    upgrade() {
        let finisedShips = [];
        for (let i = 0; i < this.#shipdepo.length; i++) {
            let j = i + 1;
            let bigShipMaker = null;

            while (j < this.#shipdepo.length && bigShipMaker === null) {
                bigShipMaker = this.#shipdepo[i].mergeShip(this.#shipdepo[j]);
                j++;
            }
            if (bigShipMaker !== null) {
                finisedShips.push(bigShipMaker);
            } else {
                finisedShips.push(this.#shipdepo[i]);
            }

        }
        this.#shipdepo = finisedShips;
    }
    getShips() {
        return this.#shipdepo;
    }
}

// this.#shipdepo[i].mergeShip(this.#shipdepo[j])
class Ship {
    // holvan ?1/2 kordináta, lövést érzékelje,el talált-e? ,elsülyedtem-e?
    constructor() {
        //console.log("super called ");
    }
    lookForShot() {
        console.log("nem kellele ez látnod :(");
    }
    amISunk() {
        console.log("nem kellele ez látnod :(");
    }
    getMyType() {
        console.log("nem kellele ez látnod :(");
    }

}

class ShipLittle extends Ship {
    #oszlop;
    #sor;
    #uszik_e = true;
    constructor(oszlopSzam, sorSzam) {
        super();
        this.#oszlop = oszlopSzam;
        this.#sor = sorSzam;
    }
    getOszlop() {
        return this.#oszlop;
    }
    getSor() {
        return this.#sor;
    };
    getMyType() {
        return 'Scout';
    }
    lookForShot(oszlopSzam, sorSzam) {
        if (oszlopSzam === this.#oszlop && sorSzam === this.#sor) {
            this.#iGetHit();
        }
    }
    #iGetHit() {
        this.#uszik_e = false;
    }
    amISunk() {
        return !this.#uszik_e;
    }
    isHeOnMyLeft(otherShip) {
        return (otherShip.getOszlop()) === this.#oszlop - 1;
    }
    isHeOnMyRight(otherShip) {
        return (otherShip.getOszlop()) === this.#oszlop + 1;
    }
    isHeOnMyTop(otherShip) {
        return (otherShip.getSor()) === this.#sor - 1;
    }
    isHeOnMyBottom(otherShip) {
        return (otherShip.getSor()) === this.#sor + 1;
    }
    sorScan(otherShip) {
        let checkingOnMySide = this.isHeOnMyLeft(otherShip) || this.isHeOnMyRight(otherShip);
        return checkingOnMySide && otherShip.getSor() === this.#sor;
    }
    oszlopScan(otherShip) {
        let checkingOnMyVerticle = this.isHeOnMyTop(otherShip) || this.isHeOnMyBottom(otherShip);
        return checkingOnMyVerticle && otherShip.getOszlop() === this.#oszlop;
    }
    scanForUpgrade(otherShip) {
        return this.sorScan(otherShip) || this.oszlopScan(otherShip);
    }
    mergeShip(otherShip) {
        if (this.scanForUpgrade(otherShip) === true) {
            return new ShipBig(this.#oszlop, otherShip.getOszlop(), this.#sor, otherShip.getSor());
        } else {
            return null;
        }
    }
}

class ShipBig extends Ship {
    #oszlop1;
    #sor1;
    #oszlop2;
    #sor2;
    #uszok1 = true;
    #uszok2 = true;
    constructor(osz1, osz2, sor1, sor2) { //arreyek a cordináták [1,0]
        super();
        this.#oszlop1 = osz1;
        this.#sor1 = sor1;
        this.#oszlop2 = osz2;
        this.#sor2 = sor2;
    }
    getMyType() {
        return "Cruser";
    }
    lookForShot(oszlopSzam, sorSzam) {
        if ((oszlopSzam === this.#oszlop1 && sorSzam === this.#sor1)
            || (oszlopSzam === this.#oszlop2 && sorSzam === this.#sor2)) {
            this.#iGetHits(oszlopSzam, sorSzam);
        }
    }
    #iGetHits(oszlopWhat, sorWhat) {
        if (oszlopWhat === this.#oszlop1 && sorWhat === this.#sor1) {
            this.#uszok1 = false;
        } else {
            this.#uszok2 = false;
        }
    }
    amISunk() {
        if (this.#uszok1 === false && this.#uszok2 === false) {
            //return !this.#uszok1 && !this.#uszok2
            return true;
        } else {
            return false;
        }
    }
}

let shipPlacement = ["A1", "C1", "B2", "B3", "D2", "E2", "E4", "E5", "A5"];
let shotPlacement = ["A1", "B2", "C3", "D4", "E5", "E4"];

let sajt = new Game(shipPlacement, shotPlacement);

sajt.start();
sajt.score();
