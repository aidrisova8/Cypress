import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import config from '../config.json'


describe('Rent Optimum', () => {

  it('should show Registered Successfully', () => {
    cy.visit('https://rentoptimum.com/')
    const homePage=new HomePage();
    const loginPage=new LoginPage();
    const signUpPage=new SignUpPage();
   
     
homePage.clickLoginSignUpLink();
loginPage.clickSignUpLink();
cy.wait(3000);
signUpPage.enterFirstName(config.firstName);
signUpPage.enterLastName(config.lastName);
signUpPage.enterEmail(config.email);
signUpPage.enterPassword(config.password);
signUpPage.clickTerms();
signUpPage.clickSignUpBtn();
signUpPage.successMsgDisplayed();

  })
})