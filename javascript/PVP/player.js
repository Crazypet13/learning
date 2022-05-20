module.exports = class Player {
    #hp = 0;
    #maxHp = 0;
    #mana = 0;
    #maxMana = 0;
    armorValue = 0;
    spellBook = [];

    constructor(name, hp, mana, armor) {
        this.name = name;
        this.#hp = this.#maxHp = hp;
        this.#mana = this.#maxMana = mana;
        this.armorValue = armor;
    }
    getHp() {
        return this.#hp;
    }
    setHp(hpChange) {
        if (typeof hpChange !== 'number' || (hpChange === NaN)) {
            console.log('please add me a number')
        } else if (this.#maxHp <= (hpChange + this.#hp)) {
            this.#hp = this.#maxHp;
            console.log(this.getHpPercent());
        } else if ((this.#hp + hpChange) <= 0) {
            this.#hp = 0;
            console.log(this.getHpPercent() + "  " + 'knocked out!!!');
        } else {
            this.#hp = (this.#hp + hpChange);
            console.log(this.getHpPercent());
        }
    }
    getMana() {
        return this.#mana;
    }
    setMana(manaRegAndUsage) {
        if (typeof manaRegAndUsage !== 'number' || (manaRegAndUsage === NaN)) {
            console.log('please add me a number')
        } else if (this.#maxMana <= (manaRegAndUsage + this.#mana)) {
            this.#mana = this.#maxMana;
            console.log(this.#mana);
        } else if ((this.#mana + manaRegAndUsage) <= 0) {
            this.#mana = 0;
            console.log(this.#mana + "  " + 'out of mana ');
        } else {
            this.#mana = (this.#mana + manaRegAndUsage)
            console.log(this.#mana);
        }
    }
    getArmor() {
        return this.armorValue;
    }
    setArmor(newArmor) {
        this.armorValue = newArmor;
        console.log(this.armorValue);
    }
    getName() {
        return this.name;
    }
    getHpPercent() {
        let parcent = (this.#hp / this.#maxHp) * 100
        return parseFloat(parcent).toFixed(2) + ' %';
    }
    getSpells() {
        // !!0 negálva a negácio 
        //console.log(this.spellBook,'\n',this.spellBook.length,'\n',(!this.spellBook.length));
        if (!this.spellBook.length) {
            console.log('you dont have spells');
            return null
        } else {
            return this.spellBook;
        }
    }
    getSpellByName(spellName){
        let i=0;
        while(spellName !== this.spellBook[i].getName() && i < this.spellBook.length-1){
            i++
        }
        return this.spellBook[i]
        
    }
    addSpells(spellName) {
        if (typeof spellName === 'object') {
            this.spellBook.push(spellName);
        } else {
            console.log("this is not a spell");
        }
    }
    setSpells(spells){
        this.spellBook = spells;
    }
}
