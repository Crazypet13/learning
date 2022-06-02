const SpellReader = require('./spellReader');
const Action =require('./action');

module.exports = class Round {
    enemy = null;
    player = null;
    inputSpelles = null;
    aiSpells = null;
    currentRound = null;
    constructor(enemy, player, currentRound) {
        this.enemy = enemy;
        this.player = player;
        this.currentRound = currentRound;
    }
    start() {
        console.log(`welcome to round ${this.currentRound} MF!!`);
        let answer = SpellReader.read();
        let theSpell = this.player.getSpellByName(answer);
        (!!theSpell == true) ? console.log(theSpell.getName()) : console.log("nincs ilyen spell") ;
        let playerTurn = new Action(this.enemy,this.player,theSpell);
        playerTurn.act()
    }
    
}
/*
    #timeLeft = 5.5
    constructor() {

    }
    getTime() {
        return this.#timeLeft;
    }
    reduceTime(time) {
        if (this.#timeLeft < time) {
            throw Error('Not enough time for that.');
        } else {
            this.#timeLeft -= time;//this.#timeLeft = (this.#timeLeft - time); 
        }
    }

*/
