describe('My First Test', () => {
  it('Succesfully loads the home page', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.wait(3000)
    // Selenium get hit url in browser, cypress gets acts like findElement of selenium
    cy.get('.product:visible').should('have.length',4)
    //parent child chaining
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4)
    cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
    {
      console.log('sf')
    })

    cy.get('@productLocator').find('.product').each(($el, index, $list) => {

      const textVeg=$el.find('h4.product-name').text()

      if (textVeg.includes('Cashews'))
      {
        $el.find('button').click()
      }

    })

    //Assert if logo text is correctly displayed
    cy.get('.brand').should('have.text', 'GREENKART')

    //This is to print in logs
    cy.get('.brand').then(function(logoelement)
    {
      cy.log(logoelement.text())

    })
  
    const logo= cy.get('.brand')

  })
})

