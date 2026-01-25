Feature: UI Behavior

  Scenario: Scroll habit list
    Given the Habo app is launched
    And multiple habits exist
    When I scroll the habit list
    Then all habits should be accessible

  Scenario: Device orientation change
    Given the Habo app is launched
    When I rotate the device
    Then the UI should adjust correctly
    And no habit data should be lost
