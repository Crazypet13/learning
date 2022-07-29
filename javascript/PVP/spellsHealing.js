const Spells = require('./spellsBasic');

module.exports = class HealingSpells extends Spells {
    healAmount = null;

    constructor(name, damage, cost, description, armorpen, healAmount) {
        super(name, damage, cost, description, armorpen);
        this.healAmount = healAmount;
        this.damage = damage;
        this.cost = cost;
        this.armorpen = armorpen;

    }
    getHeal() {
        return this.healAmount;
    }
    getType() {
        return HealingSpells.healType();
    }
    static healType() {
        return 'heal'
    }
}