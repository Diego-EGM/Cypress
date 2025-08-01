
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

/*If our test case says we need to verify the mouse hover pop up shows, we need to use the below jQuery function. If not we can just simply force the click on hidden elements.
cy.get('div.mouse-hover-content').invoke('show')*/

cy.contains('Top').click(({force: true}))
cy.url().should('include', 'top')
 
})
 
 
})