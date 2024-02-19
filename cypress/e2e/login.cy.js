import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';
import config from '../config.json'
import DashboardPage from '../pages/DashboardPage';
describe('login', () => {

  it('should show user name', () => {
    cy.visit('https://rentoptimum.com/')
    const homePage=new HomePage();
    const loginPage=new LoginPage();
    const dashboardPage=new DashboardPage();

    cy.screenshot();
homePage.clickLoginSignUpLink();
cy.wait(3000);
loginPage.enterEmail(config.email);
loginPage.enterPassword(config.password);
loginPage.clickLogInBtn();
cy.wait(3000);
dashboardPage.userNameDisplayed(config.firstName);

cy.screenshot(); 
  })
})