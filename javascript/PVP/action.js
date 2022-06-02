const DamageSpells = require('./damageSpells');
const SpellReader = require('./spellReader');
const HealingSpells =require('./healingSpells');

module.exports = class Action {
    actor = null;
    target = null;
    spell = null;
    constructor(target, actor, spell) {
        this.target = target;
        this.actor = actor;
        this.spell = spell;
    }
    act() {
        /*
        kell egy if ami speel type-ét vesz 
        egyik ág healt kezeli (+ heal amont és player hp kezelés)
        másik ág damage spellet kezeli 
        közös dolgok player mana cost és enemy hp change és settelése 
        ///or switch case ha majd lesz több


        'bélát megcsaptad x damagéval és heal eltél enyti '
        */

       if (this.spell.getType() === HealingSpells.healType()){
        
        this.actor.setHp(spell.getHeal());//heal
        //mana drain
        let manaCost = spell.getCost()*-1;
        this.actor.setMana(manaCost)
        //enemy damage
        let damage = spell.getDamage()*-1;
        this.target.setHp(damage);
        //damage - armor cuccos valami majd késobb todo leter :3

        console.log(`${this.target.getName()} megcsaptad ${this.spell.getDamage()} enyivel és ${this.spell.getHeal()} hp-t kaptál vissza `)

       }
    }
    
}

/*
switch (this.spell){
    case DamageSpells.damageType() :
        break;
}
*/