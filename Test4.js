describe('My Fourth Test Suite', function() 
{
 
it('My Third test case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()

//window:alert
cy.on('window:alert',(str) =>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')

})

cy.on('window:confirm',(str) => {
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')

})


//fixture
 
})
  
}  )