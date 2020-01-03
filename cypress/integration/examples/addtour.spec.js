describe('Check tour adding', function () {
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

    it('Enters to tour add section', function () {
        cy.contains('Dodaj Wycieczke').click()
    })

    it('Enter a new tour data', function () {

        cy.get('#name').type('trial tour')
        cy.get('#destination').type('trial tour')
        cy.get('#startDate').type('2019-12-20')
        cy.get('#finishDate').type('2019-12-22')
        cy.get('#price').type('2000')
        cy.get('#maxSeats').type('t20')
        cy.get('#description').type('trial tour trial tour trial tour trial tour')

        cy.contains('Potwierdź').click()
    })

    it('Search for added tour', function () {
        cy.get('#tourList').contains('trial tour')
        cy.get('#tourList').should('have.length', 1)
        cy.get('#tourList').eq(-1).should('contain', 'trial tour')
    })
})