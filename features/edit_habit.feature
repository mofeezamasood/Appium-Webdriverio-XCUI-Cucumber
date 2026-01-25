Feature: Edit Habit

  As a user
  I want to edit an existing habit
  So that I can update its details

  Scenario: Edit an existing habit
    Given the Habo app is launched
    And a habit named "Run" exists
    When I open the habit "Run"
    And I update the habit name to "Morning Run"
    And I save the habit changes
    Then the habit "Morning Run" should appear in the habit list
