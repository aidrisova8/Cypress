
import config from '../config.json'
import DashboardPage from '../pages/DashboardPage';
import LoginAuthPage from '../pages/LoginAuthPage';

describe('loginAuth', () => {
  const loginAuthPage = new LoginAuthPage();
  

  it('should redirect to /dashboard url',  () => {
   
        const url = config.baseUrl + '/auth/login';
        console.log('Visiting URL:', url);
      
        cy.visit(url);
        cy.debug();
        cy.wait(3000)
        cy.intercept('POST', '/auth/login').as('loginRequest');
        cy.intercept('GET', '/dashboard').as('dashboardRequest');
    
        loginAuthPage.enterEmail(config.email);
        loginAuthPage.enterPassword(config.password);
        loginAuthPage.clickLogInBtn();
    
        cy.wait(['@loginRequest', '@dashboardRequest']);
        cy.url().should('include', '/dashboard');
         
    


 
  });
});