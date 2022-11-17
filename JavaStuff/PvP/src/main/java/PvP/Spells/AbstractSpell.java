package PvP.Spells;

import java.util.Objects;

public abstract class AbstractSpell {

    protected Integer damage;
    protected Integer manaCost;
    protected int armorPen;
    protected String description;
    protected String name;

    protected String type;

    private String cica;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AbstractSpell that = (AbstractSpell) o;
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

    public AbstractSpell(Integer damage, Integer manaCost, int armorPen,
                         String description, String name) {
        this.damage = damage;
        this.manaCost = manaCost;
        this.armorPen = armorPen;
        this.description = description;
        this.name = name;
    }
    public  AbstractSpell(){
        
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

    public abstract SpellType getType();
}