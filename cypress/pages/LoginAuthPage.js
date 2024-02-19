export default class LoginAuthPage {
   
    elements = {
      emailInput: () => cy.get("input[placeholder='Enter your email'][id='email']"),
      passwordInput: () => cy.get('#password'),
      logInBtn: () => cy.get('button').contains('Log In'),
    }
  
    enterEmail(email) {
      this.elements.emailInput().type(email);
    }
    
    enterPassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    clickLogInBtn() {
      this.elements.logInBtn().click();
    }
  }