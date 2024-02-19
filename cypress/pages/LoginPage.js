export default class LoginPage{
   
    elements={
      signUpLink:()=>cy.get("[data-target='#hh-register-modal']").contains('Sign Up'),
      emailInput:()=> cy.get('#email-login-form'),
      passwordInput:()=> cy.get('#password-login-form'),
      logInBtn: ()=> cy.get('button').contains(' Log In'),
    }

    clickSignUpLink(){
        this.elements.signUpLink().click();
    }

    enterEmail(email){
      this.elements.emailInput().clear().type(email);
      }
      
enterPassword(password){
this.elements.passwordInput().clear().type(password);
 
}

clickLogInBtn(){
  this.elements.logInBtn().click();
}
}