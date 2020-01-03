describe('Check if product is added to cart', () => {
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

    it('Check if tour can be added to cart', () => {
        cy.contains('Dodaj do koszyka')
        cy.contains('+')
        cy.contains('-')

        cy.get('.toCart').first().click()
        cy.get('.cart').first().click()
    })

    it('Check if tour can be removed from cart', () => {
        cy.get('.fa-trash').click()
    })

    it('Check if reservation is disabled when no products in cart', () => {
        cy.get('Rezerwuj').should('be.disabled')
    })
})