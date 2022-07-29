const DamageSpells = require('./spellsDamage');
const SpellReader = require('./spellReader');
const HealingSpells =require('./spellsHealing');

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
        
        this.actor.setHp(this.spell.getHeal(),this.spell.getArmorPen());
        //heal
        let manaCost = this.spell.getCost()*-1;
        this.actor.setMana(manaCost)
        //mana drain
        let damage = this.spell.getDamage()*-1;
       let damageConsLogH = this.target.setHp(damage,this.spell.getArmorPen());
        //enemy damage
        //damage - armor cuccos valami majd késobb todo leter :3

        console.log(`${this.target.getName()} sebzödött ${damageConsLogH} enyivel és ${this.spell.getHeal()} hp-t kaptál vissza `)

       }else{
        let manaCost = this.spell.getCost()*-1;
        this.actor.setMana(manaCost)
        //mana drain
        let damage = this.spell.getDamage()*-1;
       let damageConsLogD = this.target.setHp(damage,this.spell.getArmorPen());
        //enemy damage
        
        console.log(`${this.target.getName()} sebzödött ${damageConsLogD} enyivel.`)
       }
    }
    
}

/*
switch (this.spell){
    case DamageSpells.damageType() :
        break;
}
*/