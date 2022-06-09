const AiAbstract = require("./aiAbstract");

module.exports = class AiBasic extends AiAbstract{
    #me = null;
    constructor(me){
        super()
        this.#me = me;
        }
        getSpell(){
            if (this.#me.getHpPercentNumber() <= 25){
                return 'hollyFire'
            }else{
                let pickedOne = Math.floor(Math.random()*4);
                let spells = this.#me.getSpells();
                return spells[pickedOne].getName();
            }
        }
            
}