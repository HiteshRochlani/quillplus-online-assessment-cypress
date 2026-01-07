Feature:

    Scenario: Registration
        Given I logged in with random number and default OTP
        Then I filled registration form
        |name|email|dob|gender|
        |taylor|random|2004-05-18|Female|