const SpellReader = require('./spellReader');
const Action = require('./action');
const AiBasic = require('./aiBasic');

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
        let answer = SpellReader.getInput();
        let theSpell = this.player.getSpellByName(answer);
        (!!theSpell == true) ? console.log(theSpell.getName()) : console.log("nincs ilyen spell");
        let playerTurn = new Action(this.enemy, this.player, theSpell);
        playerTurn.act();
        if (this.enemy.getHp() === 0) { return }
        console.log("---------------------------------------")
        let ai = new AiBasic(this.enemy);
        let theEnemySpellName = ai.getSpell();
        let enemySpell = this.enemy.getSpellByName(theEnemySpellName);
        (!!enemySpell == true) ? console.log(enemySpell.getName()) : console.log("nincs ilyen spell");
        let enemyTurn = new Action(this.player, this.enemy, enemySpell);
        enemyTurn.act();
        console.log("==========================================")
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
