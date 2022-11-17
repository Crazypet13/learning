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
            this.currentHP = getValueWithinLimits(valueToSet, minimumValue, this.maxHp);
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
            this.currentMana = getValueWithinLimits(valueToSet,minimumValue,this.maxMana);
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

    public void modifyCurrentHp (Integer input){
        try {
             if(input >= 0){
                 setCurrentHP(getCurrentHP()+input);//healing case
             }else{
                 Integer x = input + this.armorValue;
                 if (x < 0){
                     setCurrentHP(getCurrentHP()+x);
                 }
             }
        } catch (CharacterInvalidFieldException e) {
            System.out.println(e);
        }
    }

}
// mana rész ez , Spell book elkészítés ,carakernek a mezöje ként?
