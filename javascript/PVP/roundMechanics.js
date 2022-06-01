const SpellReader = require('./spellReader');

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
    starter() {
        console.log(`welcome to round ${this.currentRound} MF!!`);
        let answer = SpellReader.read();
        let theSpell = this.player.getSpellByName(answer);
        (!!theSpell == true) ? console.log(theSpell.getName()) : console.log("nincs ilyen spell") ;


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
