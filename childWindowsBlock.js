describe('Handling Child Windows', () => {
    it('Should handle child window', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //This is how we tell Cypress not to open another tab
        cy.get("#opentab").then(function(el) { // <--- Added '{' here

            const url = el.prop('href');
            cy.visit(url); //qaclickacademy.com

            cy.origin(url, () => { // <--- Added '{' here
                cy.get("#navbarSupportedContent a[href*='about']").click();
                cy.get(".mt-50 h2").should('contain', 'QAClick Academy');
            });
        }); // <--- Added ')' and '}' to close the .then() block correctly
    });
});