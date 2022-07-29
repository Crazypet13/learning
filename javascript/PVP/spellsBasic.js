module.exports = class Spells {
    // damage value , description , penetration (ignors that many armor)
    // cost(x mana) , heal (not all but some skilles can heal the caster)
    damage;
    manaCost;
    armorpen;
    description;
    name;
    armorpen;

    constructor(name, damage, manaCost, description,armorpen) {
        this.description = description;
        this.name = name;
        this.damage = damage;
        this.cost = manaCost;
        this.armorpen =armorpen;
    }
    getDamage() {
        return this.damage;
    }
    getDesc() {
        return this.description;
    }
    getCost() {
        return this.cost;
    }
    getName() {
        return this.name;
    }
    getType(){
        throw "not Implemented"
    }
    getArmorPen() {
        return this.armorpen;
    }
}