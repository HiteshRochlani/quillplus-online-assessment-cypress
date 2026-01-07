Feature: Login Flow Test

    Scenario: Positive Login
        Given I visited login page
        Then I logged in with number "7208281444" and otp "131313"

    Scenario: Negative Login
        Given I visited login page
        Then I logged in with number "7208281444" and wrong otp