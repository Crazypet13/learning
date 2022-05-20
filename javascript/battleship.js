
class Game {
    constructor(ships, shots) {
        this.ships = ships;
        this.shots = shots;
        this.A = [0, 0, 0, 0, 0];
        this.B = [0, 0, 0, 0, 0];
        this.C = [0, 0, 0, 0, 0];
        this.D = [0, 0, 0, 0, 0];
        this.E = [0, 0, 0, 0, 0];

        for (let i = 0; i < ships.length; i++) {
            let column = ships[i][1];
            let columnValue
            columnValue = parseInt(column);
            let row = ships[i][0]
            switch (row) {
                case "A":
                    this.A[columnValue - 1] = 1;
                    break;
                case "B":
                    this.B[columnValue - 1] = 1;
                    break;
                case "C":
                    this.C[columnValue - 1] = 1;
                    break;
                case "D":
                    this.D[columnValue - 1] = 1;
                    break;
                case "E":
                    this.E[columnValue - 1] = 1;
                    break;
            }

        }
        for (let i = 0; i < shots.length; i++) {
            let spot = shots[i][1];
            let spot2
            spot2 = parseInt(spot);
            let row = shots[i][0]
            switch (row) {
                case "A":
                    if (this.A[spot2 - 1] === 1) {
                        this.A[spot2 - 1] = 3
                    } else {
                        this.A[spot2 - 1] = 2
                    }
                    break;
                case "B":
                    if (this.B[spot2 - 1] === 1) {
                        this.B[spot2 - 1] = 3
                    } else {
                        this.B[spot2 - 1] = 2
                    }
                    break;
                case "C":
                    if (this.C[spot2 - 1] === 1) {
                        this.C[spot2 - 1] = 3
                    } else {
                        this.C[spot2 - 1] = 2
                    }
                    break;
                case "D":
                    if (this.D[spot2 - 1] === 1) {
                        this.D[spot2 - 1] = 3
                    } else {
                        this.D[spot2 - 1] = 2
                    }
                    break;
                case "E":
                    if (this.E[spot2 - 1] = 1) {
                        this.E[spot2 - 1] = 3
                    } else {
                        this.E[spot2 - 1] = 2
                    }
                    break;
            }

        }

    }
    static emptySpot = 0;
    static shipMarker = 1;
    static missedShot = 2;
    static hitShots = 3;


    getBoard() {
        return [this.A, this.B, this.C, this.D, this.E];
    }
    getHits() {
        let finisedBoard = this.getBoard()
        let hits = 0
        for (let i = 0; i < finisedBoard.length; i++) {
            for (let j = 0; j < finisedBoard[i].length; j++) {
                if (finisedBoard[i][j] === 3) {
                    hits++
                }
            }
        }
        return hits;
    }
    /*
    getSunk() {
        let finisedBoard = this.getBoard()
        let sunk = 0
        for (let i = 0; i < finisedBoard.length; i++) {
            for (let j = 0; j < finisedBoard[i].length; j++) {
                if (i === 0 && j === 0) {

                }
            }
        }
    }
    */
}

let scheme =
    ["A1", "C1", "B2", "B3", "D2", "E2", "E4", "E5", "A5"]

let shots = ["A1", "B2", "C3", "D4", "E5", "E4"]

let wupppy = new Game(scheme, shots)
wupppy.getBoard();







/*



[1, 1, 0, 0, 0];
[0, 0, 0, 0, 0];
[1, 1, 0, 0, 0];
[0, 0, 0, 0, 0];
[0, 0, 0, 0, 0];

class saajj{

isHeOnMyLeft(otherShip){
   let döntés = (otherShip.getOszlop()) === this.#oszlop-1  
    if (döntés){
        return true;
      }else{
          return false;
      }
    }
    
    return (otherShip.getOszlop()) === this.#oszlop-1
    */

    sorScan(otherShip){
        if ((this.isHeOnMyLeft(otherShip)||this.isHeOnMyRight(otherShip)&&)){
           return otherShip.getSor() === this.#sor
        }else{
            return false;
        }
    }
}