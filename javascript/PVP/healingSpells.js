const Spells = require('./spellsBasic');

module.exports = class HealingSpells extends Spells {
    healAmount

    constructor(name, damage, cost, armorpen, healAmount, description) {
        super(name, damage, cost, armorpen, description);
        this.healAmount = healAmount;
    }
    getHeal() {
        return this.healAmount;
    }
    getType() {
        return 'heal';
    }

}