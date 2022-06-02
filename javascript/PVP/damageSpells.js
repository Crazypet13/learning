const Spells = require('./spellsBasic');

module.exports = class DamageSpells extends Spells {
    
    constructor(name, damage, cost, armorpen, description) {
        super(name, damage, cost, armorpen, description);
        this.damage = damage;
        this.manaCost = cost;
        this.armorpen = armorpen;
    }
    getType() {
        return DamageSpells.damageType();
    }
    static damageType(){
        return 'damage';
    }
}