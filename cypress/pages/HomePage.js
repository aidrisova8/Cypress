class HomePage{

    elements={
    
    loginSignUpLink : () => cy.get('a').contains('Login/Sign Up'),
    
    }
    
    clickLoginSignUpLink(){
    this.elements.loginSignUpLink().click();
    
    }
    
    }
    export default HomePage;