package PvP.CaracterStat;

import PvP.Spells.Spell;
import PvP.Spells.SpellType;

import java.util.Random;

public class AiAction extends Action{

    public AiAction(Character character) {
        super(character);
    }

    public Spell throwSpell(){
      Float theOnePercent = Float.valueOf(this.character.maxHp/100);
      Float percent = this.character.currentHP/theOnePercent;
      if(percent< 30) {
          for (Spell actualSpell:getCharacterSpellBook().getSpells()) {
              if (actualSpell.getType() == SpellType.HEALING ){
                  if(actualSpell.getManaCost()>character.currentMana){
                      System.out.println("Not enough manna");//exeption dobjon azt kapja el majd a körökreosztéási valami
                  }else{return  actualSpell;}
              }
          }
         return null;
      }else{
       int index = new Random().nextInt( 6);
         return getCharacterSpellBook().getSpells().get(index);//mana csek todo
      }
    }
}
