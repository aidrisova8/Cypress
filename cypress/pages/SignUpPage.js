
class SignUpPage{
 elements={
    firsNameInput:()=> cy.get('#first-name-reg-form'),
    lastNameInput:()=>cy.get('#last-name-reg-form'),
    emailInput:()=> cy.get('#email-address-reg-form'),
    passwordInput:()=> cy.get('#password-reg-form'),
    termsAndConditionCheckbox: ()=> cy.get('#reg-term-condition'),
    signUpBtn: ()=> cy.get('button').contains(' Sign Up'),
    msg:()=>cy.get('#hh-sign-up-form > div.form-message')
 } 

enterFirstName(firstName){
this.elements.firsNameInput().clear();
this.elements.firsNameInput().type(firstName);
}

enterLastName(lastName){
    this.elements.lastNameInput().clear();
    this.elements.lastNameInput().type(lastName);
    }

 enterEmail(email){
        this.elements.emailInput().clear();
        this.elements.emailInput().type(email);
        }
        
enterPassword(password){
  this.elements.passwordInput().clear();
  this.elements.passwordInput().type(password)
  }

clickTerms(){
    this.elements.termsAndConditionCheckbox().check({ force: true });
}

clickSignUpBtn(){
    this.elements.signUpBtn().click();
}

successMsgDisplayed(){
    this.elements.msg().should('be.visible').and('have.text', 'Registered successfully\n');
}

}

export default SignUpPage