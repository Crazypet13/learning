package PvP.Spells;
import java.util.Objects;

public class Spell {

    protected Integer damage;
    protected Integer manaCost;
    protected int armorPen;
    protected String description;
    protected String name;

    protected SpellType type;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Spell that = (Spell) o;
        return armorPen == that.armorPen && damage.equals(
                that.damage) && manaCost.equals(
                that.manaCost) && Objects.equals(description,
                that.description) && name.equals(that.name) && type.equals(
                that.type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(damage, manaCost, armorPen, description, name,
                type);
    }

    public Spell(Integer damage, Integer manaCost, int armorPen,
                 String description, String name,SpellType type) {
        this.damage = damage;
        this.manaCost = manaCost;
        this.armorPen = armorPen;
        this.description = description;
        this.name = name;
        this.type = type;
    }
    public  Spell(){
        this.damage = 10;
        this.manaCost = 10;
        this.armorPen = 10;
        this.description = "szép";
        this.name = "cica";
        this.type = SpellType.HEALING;
    }
    public Spell(SpellType type){
        this();
        this.type = type;
    }

    public Integer getDamage() {
        return damage;
    }

    public void setDamage(Integer damage) {
        this.damage = damage;
    }

    public Integer getManaCost() {
        return manaCost;
    }

    public void setManaCost(Integer manaCost) {
        this.manaCost = manaCost;
    }

    public int getArmorPen() {
        return armorPen;
    }

    public void setArmorPen(int armorPen) {
        this.armorPen = armorPen;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public SpellType getType() {
        return this.type;
    }
    public void setType(SpellType type){
        this.type = type;
    }
}