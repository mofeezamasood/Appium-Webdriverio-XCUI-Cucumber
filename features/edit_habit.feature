Feature: Edit Habit

  As a user
  I want to edit an existing habit
  So that I can update its details

  Scenario: Edit an existing habit
    Given the Habo app is launched
    And a habit named "<Habit>" exists
    When I click on modify button for "<Habit>"
    And I enter "<Editted>" as the habit name    
    And I tap on the Save Habit button
    Then the habit "<Editted>" should appear in the habit list


  Examples:
    | Habit         | Editted |
    | Drink Water   |  Drink  |
    | Eat Dinner    |  Eat  |
    | Do Excercise  |  Do  |
    | Go on a Walk  |  Go  |
    |   Drink Juice   | Juice |
    |  Do Homework    | Homework |
    |  Go on a Run    | Run |
    |   Eat launch    | Lunch|