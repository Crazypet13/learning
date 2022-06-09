const Spells = require('./spellsBasic');

module.exports = class HealingSpells extends Spells {
    healAmount = null;

    constructor(name, damage, cost, healAmount, description) {
        super(name, damage, cost, description);
        this.healAmount = healAmount;
    }
    getHeal() {
        return this.healAmount;
    }
    getType() {
        return HealingSpells.healType();
    }
    static healType(){
        return 'heal'
    }
}