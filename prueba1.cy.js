describe('My Fourth Test Suite', function() {

    it('My Third test case', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('[value="Confirm"]').click();

        // Listen for the confirm event BEFORE clicking the button that triggers it
        cy.on('window:confirm', (str) => {
            cy.log(`Confirm dialog message: "${str}"`); // This will show in Cypress log
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
            // If you want to click "Cancel" instead of "OK" (default), return false:
            // return false;
        });

        

        // Click the confirm button
        

        // You might also want to assert something happens on the page after the confirm
        // e.g., if clicking OK leads to a specific message or state.
        // For example, if "OK" proceeds and "Cancel" shows a message:
        // cy.get('#result-message').should('contain.text', 'You confirmed!'); // Example
    });
})