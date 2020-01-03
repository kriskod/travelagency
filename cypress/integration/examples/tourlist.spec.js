describe('Check if list of tours is loaded', () => {
    it('Navigates to login page', () => {
        cy.visit('http://localhost:4200/logowanie')
        cy.url()
            .should('include', '/logowanie')

        cy.contains('Zaloguj')
        cy.contains('Powrót')
    })

    it('Login as active user', function () {
        cy.get('.email').type('adminek@mail.com')
            .should('have.value', 'adminek@mail.com')

        cy.get('.password').type('123456789')
            .should('have.value', '123456789')
        cy.contains('Zaloguj').click()
    })

    it('Check if list of tours is visible', () => {
        cy.get('.card').its('length').should('be.gt', 0)
    })

    it('Check if tour can be deleted', () => {
        cy.get('.deleteTour').last().click()
        cy.get('.card').its('length')
    })
})