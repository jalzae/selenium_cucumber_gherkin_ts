Feature: Google Search

  Scenario Outline: Open Google and search for various terms
    Given I have opened Google
    When I search for "<searchTerm>"
    Then Title is include with "<searchTerm>"

    Examples:
      | searchTerm   |
      | webdriver    |
      | blogspot     |
      | cucumber     |
