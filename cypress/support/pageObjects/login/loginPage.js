class LoginPage {
    elements = {
      emailInput: () => cy.get('#username'),
      passwordInput: () => cy.get('#password'),
      loginButton: () => cy.get('.btn'),
      errorMessage: () => cy.get('.error-message')
     
    }
  
    login(email, password) {
      this.elements.emailInput().type(email)
      this.elements.passwordInput().type(password)
      this.elements.loginButton().click()
    } 
  }
 

 
  
  export const loginPage = new LoginPage()
  