Feature: Attempt Practice test
    Background: User is on home page
        Given I visited login page
        Then I logged in with number "7208281444" and otp "131313"

    Scenario:  User is attempting practice test
        Given Opened practice section
        Then Selected one subject
        And Selected random chapter
        Then Selected number of questions and started the test 
        And Attempted the test
        Then Validate Result Page

