describe('Check a navbar component', function () {
    it('Navigates to login page', function () {
        cy.visit('http://localhost:4200/logowanie')
        cy.url()
            .should('include', '/logowanie')

        cy.contains('Zaloguj')
        cy.contains('Powrót')
    })

    it('Logging as admin', function () {
        cy.get('.email').type('adminek@mail.com')
            .should('have.value', 'adminek@mail.com')

        cy.get('.password').type('123456789')
            .should('have.value', '123456789')
        cy.contains('Zaloguj').click()
    })

    it('Check buttons: Strona główna, Oferta, Dodaj Wycieczke, Koszyk', function() {
        cy.contains('Strona Główna').click()
        cy.contains('Oferta').click()
        cy.contains('Dodaj Wycieczke').click()
        cy.contains('Zamknij').click()
        cy.contains('Koszyk').click()
    })
})