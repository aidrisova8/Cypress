export default class DashboardPage{
   
    elements={
      userName:()=>cy.get("#right-navigation > ul > li:nth-child(3) > a > span"),
    }

    userNameDisplayed(firstName){

        this.elements.userName().should('be.visible').and('contain', firstName);
    }

 
}