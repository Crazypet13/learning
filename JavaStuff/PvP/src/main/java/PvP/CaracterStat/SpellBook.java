package PvP.CaracterStat;

import PvP.Spells.Spell;
import PvP.Spells.SpellType;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

/* - check (megvelelö mebiteli helyes e + karakter átalakiítás)
   -buta? getter setter
 */
public class SpellBook {
    ArrayList<Spell> spells;

    public SpellBook() {
        this.spells = new ArrayList();

        this.spells.add(new Spell(1, 5, 600, "and again and agin and again", "Spoon", SpellType.DAMAGE));
        this.spells.add(new Spell(80, 20, 10, "its a fireball what do you think?", "FireBall", SpellType.DAMAGE));
        this.spells.add(new Spell(100, 40, 300, "Fry them up", "ThunderBolt", SpellType.DAMAGE));
        this.spells.add(new Spell(150, 30, 50, "melt them", "FireStorm", SpellType.DAMAGE));
        this.spells.add(new Spell(100, 15, 0, "BURN THE HERETIC IN HOLLY FLAMY FOR THE NAME OF THE EMPEROR!", "HollyFire", SpellType.HEALING));
        this.spells.add(new Spell(5000, 1, 6000, "ONLY ONEC", "BIG Spoon", SpellType.DAMAGE));
    }

    public SpellBook(ArrayList spells) {
        this.spells = spells;
    }

    public ArrayList<Spell> getSpells(){
      return this.spells;
    }
    public void setSpells(ArrayList replaceArray){
      this.spells = replaceArray;
    }
    //
    public Spell getSpellByName(String name){
     int i = 0;
     int max= this.spells.size();
     Spell returnValue = null;
     while (i < max || returnValue != null){
         String spellName = this.spells.get(i).getName().toLowerCase();
         String spellInputName = name.toLowerCase();
      if (spellName == spellInputName){
           returnValue = this.spells.get(i);
         } else{
          i++;
      }
     }
        return returnValue;
    }

    //spell adder / deleter arreyend belül éd db szám restriction 2.0
}
