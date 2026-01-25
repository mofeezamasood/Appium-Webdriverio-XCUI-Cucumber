Feature: Habit Validation

  As a user
  I want proper validation when creating habits
  So that incorrect data is not saved

  Scenario: Prevent creating a habit with empty name
    Given the Habo app is launched
    When I tap on the Add Habit button
    And I leave the habit name empty
    And I tap on the Save Habit button
    Then an error message should be displayed
    And the habit should not be added

  Scenario: Handle long habit names
    Given the Habo app is launched
    When I tap on the Add Habit button
    And I enter a very long habit name
    And I tap on the Save Habit button
    Then the habit name should be truncated or an error should be displayed

  Scenario: Handle duplicate habit names
    Given the Habo app is launched
    And a habit named "Read" exists
    When I try to add another habit named "Read"
    Then the app should prevent duplicate habits or show a warning
