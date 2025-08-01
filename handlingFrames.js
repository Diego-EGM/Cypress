import 'cypress-iframe'

describe('Frames Test', function() {

  it('Demo Frames', function() {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.frameLoaded("#courses-iframe")

    // Click the mentorship link
    cy.iframe().find("a[href='mentorship']").eq(0).click()

    // Break up the chain and re-query the elements within the iframe for the assertion.
    // Cypress will now retry finding these elements until the assertion passes or times out.
    cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length', 2)

  })
})