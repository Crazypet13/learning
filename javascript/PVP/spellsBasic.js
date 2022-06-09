module.exports = class Spells {
    // damage value , description , penetration (ignors that many armor)
    // cost(x mana) , heal (not all but some skilles can heal the caster)
    damage;
    manaCost;
    armorpen;
    description;
    name;

    constructor(name, damage, manaCost, description) {
        this.description = description;
        this.name = name;
        this.damage = damage;
        this.cost = manaCost;
    }
    getDamage() {
        return this.damage;
    }
    getDesc() {
        return this.description;
    }
    getCost() {
        return this.manaCost;
    }
    getName() {
        return this.name;
    }
    getType(){
        throw "not Implemented"
    }
}