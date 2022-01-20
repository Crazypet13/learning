# features/simple_math.feature
Feature: Simple maths
  In order to do maths
  As a developer
  I want to increment variables

  @id-1
  Scenario: easy maths
    Given a variable set to 1
    When I increment the variable by 1
    Then the variable should contain 2

  @id-2
  Scenario Outline: much more complex stuff
    Given a variable set to <var>
    When I increment the variable by <increment>
    Then the variable should contain <result>
    Examples:
      | var | increment | result |
      | 100 | 5         | 105    |
      | 99  | 1234      | 1333   |
      | 12  | 5         | 17     |

  @id-3 @e2e
  Scenario: test log in with wrong data
    Given i navigate to "http://www.uitestingplayground.com/sampleapp"
    When i fill password with "passw00rd"
    And i fill username with "Béla"
    And i push log in button
    Then i validate login message what is "Invalid username/password"

  @id-4 @e2e
  Scenario: succesfull log in
    Given i navigate to "http://www.uitestingplayground.com/sampleapp"
    When i fill password with "pwd"
    And i fill username with "János"
    And i push log in button
    Then i validate login message what is "Welcome, János!"