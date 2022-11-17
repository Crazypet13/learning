package PvP.Spells;

import java.lang.reflect.Field;

public class SpellDamage extends AbstractSpell {
    public SpellDamage(Integer damage, Integer manaCost, int armorPen,
                       String description, String name) {
        super(damage, manaCost, armorPen, description, name);
    }

    public SpellDamage() {
                   super();
    }

    /*
public void myRefletion () throws NoSuchFieldException,
  IllegalAccessException {
Field declaredField =  null;
declaredField = AbstractSpell.class.getDeclaredField("cica");
boolean accessible = declaredField.isAccessible();

declaredField.setAccessible(true);

declaredField.set(this,"kutya");
Object value = declaredField.get(this);

System.out.println(value);

declaredField.setAccessible(accessible);

}
      */
    @Override
    public SpellType getType() {
        return SpellType.DAMAGE;
    }

    public void setType(String typeOfDamage) throws Exception {
        throw new Exception(
                "You cant change the type of this shizz " + typeOfDamage);
    }
}