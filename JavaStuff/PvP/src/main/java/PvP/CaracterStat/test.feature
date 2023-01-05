//debugging cucumber style given/when/then +senariokba

  @id-1
  Scenario:invalid input number
    Given start up main
    When put input other number then correct one(currently 1-6)
    Then main stops with code 1
  @id-2
  Scenario:invalid input String
    Given start up main
    When put in String type object
    Then main stop working with code 1
  @id-3  //design problem and user accessibility
  Scenario:not enough information on chose screen
    Given  start up main
    When chose screen pop up
    Then not enough information about spells
  //maybe later the ki iró use it
  @id-4
  Scenario: Ai out of mana
    Given start up main
    When using number 5 (heal spell) to stall so Ai is out of mana
    Then randomizer can spam terminal if not use the free spell
  //see in */pseudo/id-4


