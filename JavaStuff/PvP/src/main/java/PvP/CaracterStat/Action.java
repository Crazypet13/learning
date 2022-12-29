package PvP.CaracterStat;

import PvP.Spells.Spell;

public abstract class Action{
    protected Character character;

    protected SpellBook characterSpellBook;

    public  Action(Character character){

            this.character = character;
    }
    public  SpellBook getCharacterSpellBook(){return this.character.getSpellBook();}

    public  Character getCharacter (){return this.character;}

    public abstract Spell throwSpell();
}

