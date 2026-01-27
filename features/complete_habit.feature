Feature: Complete Habit

  As a user
  I want to mark a habit as completed
  So that I can track my progress

  Scenario: Mark habit as completed
    Given the Habo app is launched
    And a habit named "<Habit>" exists
    When I mark the habit "<Habit>" as completed for date "<Date>"
    # Then the habit "<Habit>" should be marked as completed

  Examples:
    |      Habit      | Date|
    |   Do Excercise    | Monday, January 26, 2026|
    # |   Drink Water   | 
    # |  Do Excercise   | 
    # |  Go on a Walk  | 