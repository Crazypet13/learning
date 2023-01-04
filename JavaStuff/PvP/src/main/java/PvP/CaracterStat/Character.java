package PvP.CaracterStat;


public class Character extends AbstractCharacter {
    final Integer minimumValue = 0;

    public Character() {
        super();
    }

    public Character(String name, Integer maxHp, Integer maxMana,
                     Integer armorValue) {
        super(name, maxHp, maxMana, armorValue);
    }

    @Override
    protected void setCurrentHP(Integer valueToSet) throws CharacterInvalidFieldException {
        if (valueToSet == null) {
            if (this.currentHP == null) {
                this.currentHP = this.maxHp;
            }
            throw new CharacterInvalidFieldException("Invalid hp change");
        } else {
            this.currentHP = getValueWithinLimits(valueToSet, this.minimumValue, this.maxHp);
        }
    }

    @Override
    protected void setCurrentMana(Integer valueToSet) throws CharacterInvalidFieldException{
        if (valueToSet == null) {
            if (this.currentMana == null) {
                this.currentMana = this.maxMana;
            }
            throw new CharacterInvalidFieldException("Invalid mana change");
        } else {
            this.currentMana = getValueWithinLimits(valueToSet,this.minimumValue,this.maxMana);
        }

    }

    private Integer getValueWithinLimits(Integer possibleValue, Integer min, Integer max) {
        if (possibleValue < min) {
            return min;
        } else if (possibleValue > max) {
            return max;
        } else {
            return possibleValue;
        }
    }
 // kifelé építkezünk hp modosíto (+ - értékekkel ) mana ctrl c / v

    public void modifyCurrentHp (Integer damage,Integer armorPen){
        try {
             if(damage >= 0){
                 setCurrentHP(getCurrentHP()+damage);//healing case
             }else{
                 Integer activeArmore = armorPen + this.armorValue;
                 if (activeArmore < 0){
                     setCurrentHP(getCurrentHP()+damage);
                 }else{
                     setCurrentHP(getCurrentHP()+damage+activeArmore);
                 }
             }
        } catch (CharacterInvalidFieldException e) {
            System.out.println(e);
        }
    }

    public void modifyCurrentMana (Integer input){
        try {
            {
                if (input < 0){
                    setCurrentMana(getCurrentMana()+input);
                }
            }
        } catch (CharacterInvalidFieldException e) {
            System.out.println(e);
        }
    }

}
// mana rész ez , Spell book elkészítés ,carakernek a mezöje ként?
