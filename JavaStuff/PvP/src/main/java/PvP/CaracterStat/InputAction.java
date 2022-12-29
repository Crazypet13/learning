package PvP.CaracterStat;

import PvP.Spells.Spell;

import java.util.ArrayList;
import java.util.Scanner;

public class InputAction extends Action{


    public InputAction(Character character) {
        super(character);
    }

    @Override public Spell throwSpell() {
      ArrayList<Spell> spells = character.getSpellBook().getSpells();

        for (int i = 0; i < spells.size(); i++) {
            System.out.println("("+i+1+")  "+spells.get(i).getName());
        }
        Scanner myObj = new Scanner(System.in);  // Create a Scanner object
        System.out.println("What do you want to do?,press the number consistent with it");
        Integer index = myObj.nextInt();  // Read user input,LEHET Readline kell helyette
        return spells.get(index);  // Output user input

    }
}
