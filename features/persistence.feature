Feature: Habit Persistence

  As a user
  I want my habits to persist
  So that I do not lose data after restarting the app

  Scenario: Habit persists after app restart
    Given the Habo app is launched
    And a habit named "Stretch" exists
    When I close the Habo app
    And I relaunch the Habo app
    Then the habit "Stretch" should appear in the habit list
