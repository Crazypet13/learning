/*  -maxhp only and we make some functions to calculate or work with the data
    -so i guess we dont need a setter?
    -mert beveszi az adatot ot csinál magának 2 egy amir const és max ként dolgozikegy meg a változo hp
    - mondjuk combaton belül
    -de a setter csak mert mi van ha
    -simmple is good~
*/

package PvP.CaracterStat;

public abstract class AbstractCharacter {

    protected String name;
    protected Integer maxHp;

    protected Integer currentHP;
    protected Integer maxMana;

    protected Integer currentMana;
    protected Integer armorValue;

    protected SpellBook spellBook;

    public AbstractCharacter() {
        this("cica",100,100,10);
    }
     // add confugurable spellbook in the future
    public AbstractCharacter(String name, Integer maxHp, Integer maxMana,
                             Integer armorValue) {
        this.name = name;
        this.maxHp = maxHp;
        this.maxMana = maxMana;
        this.armorValue = armorValue;
        this.spellBook = new SpellBook();
        try {
            initializer();
        } catch (CharacterInvalidFieldException e) {
            System.out.println(e.getMessage());
        }
    }

    private void initializer() throws CharacterInvalidFieldException {
        this.currentHP = this.maxHp;
        setCurrentMana(getMaxMana());
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) throws CharacterInvalidFieldException {
        if (name == null) {
            if (this.name == null) {
                this.name = "Cica";
            }
            throw new CharacterInvalidFieldException("Character name insufficient input!");
        } else {
            this.name = name;
        }
        ;
    }

    public Integer getMaxHp() {
        return this.maxHp;
    }

    public void setMaxHp(Integer maxHp) throws CharacterInvalidFieldException {
        if (maxHp == null) {
            if (this.maxHp == null) {
                this.maxHp = 100;
            }

            throw new CharacterInvalidFieldException("Invalid maxHp input");
        } else {
            this.maxHp = maxHp;
        }
    }

    public Integer getCurrentHP() {
        return this.currentHP;
    }

    protected abstract void setCurrentHP(Integer currentHpInput) throws CharacterInvalidFieldException;

    public Integer getMaxMana() {
        return this.maxMana;
    }

    public void setMaxMana(Integer maxMana) throws CharacterInvalidFieldException {
        if (maxMana == null) {
            if (this.maxMana == null) {
                this.maxMana = 100;
            }
            throw new CharacterInvalidFieldException("Invalid maxmana input");
        } else {
            this.maxMana = maxMana;
        }
    }

    public Integer getCurrentMana() {
        return currentMana;
    }

    protected void setCurrentMana(Integer currentMana) throws CharacterInvalidFieldException {

            /*this.currentMana = (null == this.currentMana
                    ? this.maxMana
                    : this.currentMana);

            if(this.currentMana == null){
                this.currentMana = this.maxMana;
            }else{
               this.currentMana = this.currentMana;
            }
            */

    }

    public Integer getArmorValue() {
        return this.armorValue;
    }

    public void setArmorValue(Integer armorValue) throws CharacterInvalidFieldException {
        if (armorValue == null) {
            if (this.armorValue == null) {
                this.armorValue = 20;
            }
            throw new CharacterInvalidFieldException("Invalid armor value!");
        } else {
            this.armorValue = armorValue;
        }
    }
    public  SpellBook getSpellBook(){return this.spellBook;}


}
