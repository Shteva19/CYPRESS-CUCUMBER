Feature: HomePage feature

    Feature Description

    Scenario: All social media icons are present
        Given I am on the Login page
        When I on HomePage
        Then I check that all social media icons are present

    Scenario: After click to Sign Up registration form will be open
        Given I am on the Login page
        When I on HomePage
        When I click to Sign Up
        Then I check that form registration is open

    Scenario: After click to Sign In registration form will be open
        Given I am on the Login page
        When I on HomePage
        When I click to Sign In
        Then I check that form login is open