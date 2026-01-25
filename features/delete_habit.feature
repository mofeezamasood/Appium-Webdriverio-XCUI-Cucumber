Feature: Delete Habit

  As a user
  I want to delete a habit
  So that I can remove habits I no longer need

  Scenario: Delete an existing habit
    Given the Habo app is launched
    And a habit named "Meditate" exists
    When I delete the habit "Meditate"
    And I confirm the deletion
    Then the habit "Meditate" should not appear in the habit list
