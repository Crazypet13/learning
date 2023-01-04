package PvP.CaracterStat;

public class GameController {
    protected Character playerCharacter;

    protected Character enemyCharacter;
    public  GameController(){
        this.playerCharacter = new Character();
        this.enemyCharacter = new Character();
        Integer roundNumbers = 10;
        Integer index = 1;
        while (this.playerCharacter.getCurrentHP()>0
                &&
                this.enemyCharacter.getCurrentHP()>0
                &&
                index <= 10
        ){
            System.out.println("Round "+index);
         RoundController singleRound = new RoundController(
                 this.playerCharacter,
                 this.enemyCharacter);
         try{
             singleRound.oneTurn();
         } catch (CharacterInvalidFieldException error){
             System.out.println(error.getMessage());
         }
         index++;
        }
    }
}
