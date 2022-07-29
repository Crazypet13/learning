const Spells = require('./spellsBasic');

module.exports = class DamageSpells extends Spells {
    armorpen = null
    constructor(name, damage, cost, description, armorpen) {
        super(name, damage, cost, description,armorpen);
        this.damage = damage;
        this.manaCost = cost;
        this.armorpen =armorpen;
    }
    getType() {
        return DamageSpells.damageType();
    }

    static damageType() {
        return 'damage';
    }
}