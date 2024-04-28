Feature: HomePage feature

    Feature Description

    Scenario: Login with correct login and password
        Given I am on the Login page
        When I on HomePage
        When I click to Sign In
        When I enter "ivanovivan@gmail.com" correct login
        When I enter "Qwerty358" correct password
        When I click Login button
        Then I expect to be on Garage page

    Scenario: Login without login and password
        Given I am on the Login page
        When I on HomePage
        When I click to Sign In
        When I click on login field
        When I click on password field
        Then I expect that 2 errors will be visible

    Scenario: Login with incorrect login and password
        Given I am on the Login page
        When I on HomePage
        When I click to Sign In
        When I enter "test@gmail.com" incorrect login
        When I enter "test" correct inpassword
        When I click Login button
        Then I expect that error will be visible