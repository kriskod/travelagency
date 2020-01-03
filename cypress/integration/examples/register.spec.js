describe('Registering an user application', function () {
    it('Navigates to registration form', function () {
        cy.visit('http://localhost:4200/dashboard')

        cy.contains('Zarejestruj').click()
        cy.url()
            .should('include', '/rejestracja')
    })
    it('Entering wrong user data', function () {
        cy.get('.name').type('abc')
        cy.get('.email').type('abc@mail.com')
        cy.get('.password').type('abc')
        cy.get('.confirmpassword').type('abcd')
        cy.contains('Zarejestruj').click()
        cy.pause()
    })
    it('Clear wrong typed inputs', function () {
        cy.get('.name').type('abc').clear()
        cy.get('.email').type('abc@mail.com').clear()
        cy.get('.password').type('abc').clear()
        cy.get('.confirmpassword').type('abcd').clear()
    })
    it('Entering correct user data', function () {
        cy.get('.name').type('test')
        cy.get('.email').type('test@mail.com')
        cy.get('.password').type('test123')
        cy.get('.confirmpassword').type('test123')
        cy.contains('Zarejestruj').click()
    })
    it('Goto login form and check if user was created', function () {
        cy.contains('Zaloguj').click()
        cy.get('.email')
            .type('test@mail.com')
            .should('have.value', 'test@mail.com')

        cy.get('.password')
            .type('test123')
            .should('have.value', 'test123')
        cy.contains('Zaloguj').click()
    })
})