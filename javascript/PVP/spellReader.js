const readlineSync = require('readline-sync');
module.exports = class SpellReader{
    constructor(){

    }
    static getInput(){   

       let spells = ['Spoon','FireBall','HollyFire','ThunderBolt'];
       let index = readlineSync.keyInSelect(spells, 'What do you want to do');
      console.log('Ok, ' + spells[index] + ' will be cast.');
        return spells[index];
    }
    static read(){
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
        this.getInput();
        return 'Spoon';
    }
}