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

When('I click to Sign Up', () => {
    cy.get('button.btn-primary').click();
})

When('I click to Sign In', () => {
    cy.get('button.header_signin').click();
})

Then('I check that all social media icons are present', () => {
    cy.get('a.socials_link').eq(0).invoke('attr', 'href').should('contain', 'facebook.com');
    cy.get('a.socials_link').eq(1).invoke('attr', 'href').should('contain', 't.me');
    cy.get('a.socials_link').eq(2).invoke('attr', 'href').should('contain', 'youtube.com');
    cy.get('a.socials_link').eq(3).invoke('attr', 'href').should('contain', 'instagram.com');
    cy.get('a.socials_link').eq(4).invoke('attr', 'href').should('contain', 'linkedin.com');
})

Then('I check that form registration is open', () => {
    cy.get('h4').should('have.text','Registration');
})

Then('I check that form login is open', () => {
    cy.get('h4').should('have.text','Log in');
})