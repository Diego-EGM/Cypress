describe('Calendar test', () => {
  it('Verify date selection', () => {

    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber,date,year];


    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    cy.get(".react-date-picker__inputGroup").click();
    cy.get(".react-calendar__navigation").click();
    cy.get(".react-calendar__navigation").click();
    cy.contains("button", year).click();
    //below line could work but is hardcode
    //cy.get(".react-calendar__year-view__months__month").contains("abbr", "June").click();
    cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
    cy.contains("abbr", date).click();

    //Assertion
    cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
        {
            cy.wrap($el).invoke('val').should('eq',expectedList[index]);
        }
        
        )     


    })

  
})
