import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Login page', () => {
    cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
})
When('I on HomePage', () => {
    cy.get('h1').should('have.text','Do more!');
})

When('I click to Sign In', () => {
    cy.get('button.header_signin').click();
})

When('I enter {string} correct login', (correctLogin) => {
    cy.get('input#signinEmail').type(correctLogin);
})

When('I enter {string} correct password', (correctPassword) => {
    cy.get('input#signinPassword').type(correctPassword);
})

When('I click Login button', () => {
    cy.get('button.btn-primary').contains('Login').click();
})

When('I click on login field', () => {
    cy.get('input#signinEmail').click();
})

When('I click on password field', () => {
    cy.get('input#signinPassword').click();
})

When('I enter {string} incorrect login', (incorrectLogin) => {
    cy.get('input#signinEmail').type(incorrectLogin);
})

When('I enter {string} correct inpassword', (incorrectPassword) => {
    cy.get('input#signinPassword').type(incorrectPassword);
})

Then('I expect to be on Garage page', () => {
    cy.get('h1').should('have.text','Garage');
})

Then('I expect that 2 errors will be visible', () => {
    cy.get('p').contains('Email required').should('be.visible');
    cy.get('input#signinEmail').click();
    cy.get('p').contains('Password required').should('be.visible');
})

Then('I expect that error will be visible', () => {
    cy.get('p').contains('Wrong email or password').should('be.visible');
})