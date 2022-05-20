module.exports = class Spells {
    // damage value , description , penetration (ignors that many armor)
    // cost(x mana) , heal (not all but some skilles can heal the caster)
    damage;
    manaCost;
    armorpen;
    description;
    name;

    constructor(name, damage, manaCost, armorpen, description,) {
        this.description = description;
        this.castTime = castTime;
        this.name = name;
        this.damage = damage;
        this.cost = manaCost;
        this.armorpen = armorpen;
    }
    getDamage() {
        return this.damage;
    }
    getDesc() {
        return this.description;
    }
    getArmorPen() {
        return this.armorpen;
    }
    getCost() {
        return this.manaCost;
    }
    getCastingTime() {
        return this.castTime;
    }
    getName() {
        return this.name;
    }
}