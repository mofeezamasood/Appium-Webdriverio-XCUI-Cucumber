Feature: Complete Habit

  As a user
  I want to mark a habit as completed
  So that I can track my progress

  Scenario: Mark habit as completed
    Given the Habo app is launched
    And a habit named "Read" exists
    When I mark the habit "Read" as completed
    Then the habit "Read" should be marked as completed
