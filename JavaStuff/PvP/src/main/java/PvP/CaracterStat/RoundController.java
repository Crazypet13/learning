package PvP.CaracterStat;

import PvP.Spells.Spell;
import PvP.Spells.SpellType;

public class RoundController {

    protected Character playerCharacter;

    protected Character enemyCharacter;

    public  RoundController (Character player,Character enemy){
        this.playerCharacter = player;
        this.enemyCharacter = enemy;
    }
    protected void outOfMana(Spell actionSpell,Action myAction,Character actualCharacter){
        while(actualCharacter.getCurrentMana()<actionSpell.getManaCost()){
            System.out.println("Not enough mana for the spell pick something else.");
           actionSpell = myAction.throwSpell();
        }

    }
    protected void playerTurn() throws CharacterInvalidFieldException {
     InputAction myAction = new InputAction(this.playerCharacter);
     Spell attack = myAction.throwSpell();

       /* while(this.playerCharacter.getCurrentMana()<attack.getManaCost()){
            System.out.println("Not enough mana for the spell pick something else.");
            attack = myAction.throwSpell();
        }
        */
        outOfMana(attack,myAction,this.playerCharacter);
     if (attack.getType() == SpellType.DAMAGE){
         enemyCharacter.modifyCurrentHp(
                 attack.getDamage()*-1,
                 attack.getArmorPen()*-1);
         playerCharacter.modifyCurrentMana(attack.getManaCost()*-1);
     }else{
         playerCharacter.modifyCurrentHp(attack.getDamage(),attack.getArmorPen()*-1);
         playerCharacter.modifyCurrentMana(attack.getManaCost()*-1);
     }
        System.out.println(
                "player turn\n"+
                "your hp"+this.playerCharacter.getCurrentHP()+"\n"+
                "enemyHp"+ this.enemyCharacter.getCurrentHP()+"\n"+
                "spell used/damage dealt"+attack.getName()+"  "+attack.getDamage());
    }
    protected void enemyTurn() throws CharacterInvalidFieldException{
        AiAction aiAction = new AiAction(this.enemyCharacter);
        Spell attack = aiAction.throwSpell();

        /*
        while(this.enemyCharacter.getCurrentMana()<attack.getManaCost()){
            System.out.println("Not enough mana for the spell pick something else.");
            attack = aiAction.throwSpell();
        }
        */
        outOfMana(attack,aiAction,this.enemyCharacter);
        if (attack.getType() == SpellType.DAMAGE){
            playerCharacter.modifyCurrentHp(
                    attack.getDamage()*-1,
                    attack.getArmorPen()*-1);
            enemyCharacter.modifyCurrentMana(attack.getManaCost()*-1);
        }else{
            enemyCharacter.modifyCurrentHp(attack.getDamage(),attack.getArmorPen()*-1);
            enemyCharacter.modifyCurrentMana(attack.getManaCost()*-1);
        }
        System.out.println(
                "enemy turn\n"+
                        "your hp"+this.playerCharacter.getCurrentHP()+"\n"+
                        "enemyHp"+ this.enemyCharacter.getCurrentHP()+"\n"+
                        "spell used/damage dealt"+attack.getName()+"  "+attack.getDamage());
    }
    public void oneTurn() throws CharacterInvalidFieldException {
        playerTurn();
        if (enemyCharacter.getCurrentHP() == 0){
            System.out.println("yeeeyy you win");
        }else{
            enemyTurn();
            if (playerCharacter.getCurrentHP() == 0){System.out.println("OHH NO YOU ARE DEAD BIÁCS!");}
        }
    }
}

