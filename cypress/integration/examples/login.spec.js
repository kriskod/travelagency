describe('Logging into application', function () {
    it('Navigates to login page', function () {
        cy.visit('http://localhost:4200/logowanie')
        cy.url()
            .should('include', '/logowanie')

        cy.contains('Zaloguj')
        cy.contains('Powrót')
    })

    it('Check invalid inputs of user data', function () {
        cy.get('.email').type('fake@mail.com')
            .should('have.value', 'fake@mail.com')

        cy.get('.password').type('123')
            .should('have.value', '123')
        cy.contains('Zaloguj').click()
        cy.pause()
    })

    it('Clear invalid inputs', function () {
        cy.get('.email').type('fake@mail.com').clear()
        cy.get('.password').type('123').clear()
    })

    it('Check invalid email', function () {
        cy.get('.email').type('adminekmail.com')
            .should('have.value', 'adminekmail.com')

        cy.get('.password').type('123456789')
            .should('have.value', '123456789')
        cy.contains('Zaloguj').click()
        cy.pause()
    })

    it('Clear invalid email and password', function () {
        cy.get('.email').type('adminekmail.com').clear()
        cy.get('.password').type('123456789').clear()
    })

    it('Check invalid password', function () {
        cy.get('.email').type('adminek@mail.com')
            .should('have.value', 'adminek@mail.com')

        cy.get('.password').type('1234567')
            .should('have.value', '1234567')
        cy.contains('Zaloguj').click()
        cy.pause()
        
    })

    it('Clear invalid email and password', function () {
        cy.get('.email').type('adminek@mail.com').clear()
        cy.get('.password').type('1234567').clear()
    })

    it('Check is user is in base, logging with correct data', function () {
        cy.get('.email').type('adminek@mail.com')
            .should('have.value', 'adminek@mail.com')

        cy.get('.password').type('123456789')
            .should('have.value', '123456789')
        cy.contains('Zaloguj').click()
    })

    it('Loging out an user'), function () {
        cy.contains('Wyloguj').click()
    }
})