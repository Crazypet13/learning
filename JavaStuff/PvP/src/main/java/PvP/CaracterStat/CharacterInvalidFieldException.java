package PvP.CaracterStat;

public class CharacterInvalidFieldException extends Exception{
    public CharacterInvalidFieldException(){
        super();
    }
    public CharacterInvalidFieldException(String message){
      super(message);
    }
}
