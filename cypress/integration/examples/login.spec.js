describe('Logging into application', function () {
    it('Navigates to login page', () => {
        cy.visit('http://localhost:4200/logowanie')
        cy.url()
            .should('include', '/logowanie')

        cy.contains('Zaloguj')
        cy.contains('Powrót')
    })

    it('Check both invalid email and password', () =>{
        cy.get('.email').type('fake@mail.com')
            .should('have.value', 'fake@mail.com')

        cy.get('.password').type('123')
            .should('have.value', '123')
        cy.contains('Zaloguj').click()

    })

    it('Clear invalid inputs', () => {
        cy.get('.email').clear()
        cy.get('.password').clear()
    })

    it('Check invalid email', () => {
        cy.get('.email').type('adminekmail.com')
            .should('have.value', 'adminekmail.com')

        cy.get('.password').type('123456789')
            .should('have.value', '123456789')
        cy.contains('Zaloguj').click()

    })

    it('Clear invalid email and password', () => {
        cy.get('.email').clear()
        cy.get('.password').clear()
    })

    it('Check invalid password', () => {
        cy.get('.email').type('adminek@mail.com')
            .should('have.value', 'adminek@mail.com')

        cy.get('.password').type('1234567')
            .should('have.value', '1234567')
        cy.contains('Zaloguj').click()

    })

    it('Clear invalid email and password',  () =>{
        cy.get('.email').clear()
        cy.get('.password').clear()
    })

    it('Check is user is in base, logging with correct data', () => {
        cy.get('.email').type('adminek@mail.com')
            .should('have.value', 'adminek@mail.com')

        cy.get('.password').type('123456789')
            .should('have.value', '123456789')
        cy.contains('Zaloguj').click()
    })

    it('Check if user can be logged out', () => {
        cy.get('.dropdown-toggle').click()
        //cy.get('.signout').click()
    })
})