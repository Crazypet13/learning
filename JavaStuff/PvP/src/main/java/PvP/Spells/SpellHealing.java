package PvP.Spells;

public class SpellHealing extends AbstractSpell {
    public SpellHealing(Integer damage, Integer manaCost, int armorPen,
                        String description, String name) {
        super(damage, manaCost, armorPen, description, name);
    }

    @Override
    public SpellType getType() {
        return SpellType.HEALING;
    }

    public void setType(String typeOfDamage) throws Exception {
        throw new Exception(
                "You cant change the type of this shizz " + typeOfDamage);
    }
    public  SpellHealing(){
        super();
    }
}