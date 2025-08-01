describe('My Third Test Suite', function() 
{
 
it('My Third test case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//CHECKBOXES
//Assertion for checkboxes, check() is another method similar to click() for checkboxes. We can type multiple assertios with .and
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2', 'option3'])

//Static Drowpdown

 cy.get('select').select('option2').should('have.value', 'option2')
 
 //Dynamic dropdowns
 cy.get('#autocomplete').type('can')
 
 cy.get('.ui-menu-item div').each(($el, index, $list) => {

    if($el.text()==="Canada")
    {
        $el.click()
    }
 
 })
 
 cy.get('#autocomplete').should('have.value', 'Canada')

 //Visible and Invisible elements
 cy.get('#displayed-text').should('be.visible')
 cy.get('#hide-textbox').click()
 cy.get('#displayed-text').should('not.be.visible')
 cy.get('#show-textbox').click()

//Radio button

cy.get('[value="radio2"]').check().should('be.checked')
 
 
//fixture
 
}  )
 
 
 
}  )