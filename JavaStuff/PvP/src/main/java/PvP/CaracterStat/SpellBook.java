package PvP.CaracterStat;

import PvP.Spells.AbstractSpell;
import PvP.Spells.SpellDamage;

import java.util.ArrayList;
import java.util.List;

/* - check (megvelelö mebiteli helyes e + karakter átalakiítás)
   -buta? getter setter
 */
public class SpellBook {
    List<AbstractSpell> spells;

    public SpellBook(){
     this.spells = new ArrayList();
     this.spells.add(new SpellDamage());
    }

}
