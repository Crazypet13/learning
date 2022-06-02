const Round = require('./round');
const DamageSpells = require('./damageSpells');
const HealingSpells = require('./healingSpells');
const Player = require('./player');
const Enemy = require('./enemy');

let magicSpoon = new DamageSpells('Spoon', 1, 5, 600, 'and again and agin and again')
let fireBall = new DamageSpells('FireBall', 80, 20, 10, 'its a fireball what do you think?');
let thunderBolt = new DamageSpells('ThunderBolt', 100, 40, 300, 'Fry them up');
let fireStorm = new DamageSpells('FireStorm', 50, 30, 50, 'melt them');
let hollyFire = new HealingSpells('HollyFire', 30, 15, 0, 100, 'BURN THE HERETIC IN HOLLY FLAMY FOR THE NAME OF THE EMPEROR!');

//index(ui) or main(backend) is the start of the programs :3 <3
//let bob = new Player('Bob',150,300,50);
/*
bob.setHp(-90);
bob.setHp(50);
bob.setHp(200);
bob.setHp(-2000);
bob.setHp(("potato"+69));
bob.setHp("cheese");
bob.setMana(-90);
bob.setMana(50);
bob.setMana(200);
bob.setMana(-2000);
bob.setMana(("potato" + 69));
bob.setMana("cheese");
bob.getSpells();

  round count?(20 round its a draw)/ enemy defind/ harc kimenetele(állatop : nem indult el ,fut ,gyözelem ,veszteség) 
/ mana checks on people and spells(do you have enough?) / damage change on people (get damaged heald change on players) /
calculate armore stuff ? => damage-armor =>real damage
/ heal or damage spell? maybe on the object length?  Object.getOwnPropertyNames => let propSymb = Object.getOwnPropertySymbols(person[like heal amount? and it undefind akkor damage]) propSymb.length
and just check for the type (or not :P and just get this.type firstXD)
ohhh booooy make an interacteble !ai what react to your attacs and stuff 
*/

class AreneFight {
    player1 = null
    enemy = null
    #currentRoundNumber = 1;
    #maxRounds = 8;//while(!rounds && !roundsEnd && meghaltam && megöltem bélát) /maybe

    constructor(player1, enemy) {
        this.player1 = player1;
        this.enemy = enemy;
        this.inItSpells();
    }
    fight() {
        let isItEnded = this.#currentRoundNumber <= this.#maxRounds;
        let someOneDied = 0 < this.player1.getHp() || 0 < this.enemy.getHp()

        /*while (isItEnded || someOneDied) {
            let answer = this.getInput('What do you want to do?')
            switch (answer) {
                case 'help':
                    console.log(this.player1.getSpells())
                    break;
                case '':
            }
        }
        */
        for (let i = 0; i < this.#maxRounds; i++) {
            this.#currentRoundNumber = i + 1;
            let roundInProgress = new Round(this.enemy, this.player1, this.#currentRoundNumber);
            roundInProgress.start();
            
        }
    }

    getInput(question) {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(question, answer => {
            readline.close();
            return 1;
        })
    }
    inItSpells() {
        this.player1.setSpells([fireBall, thunderBolt, fireStorm, magicSpoon, hollyFire]);
        //this.player1.setSpells(null);
    }

}
let bob = new Player('Bob', 150, 300, 50);
let Bob2 = new Player('Bob2', 150, 300, 50);
let cica = new AreneFight(bob, Bob2);
cica.fight()