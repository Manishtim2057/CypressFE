import { loginPage } from "../login/loginPage"
class VisitUrlClass {
    visit() {
      // cy.viewport(1280, 1080) 
      cy.visit('http://localhost:4200/auth/login')
      loginPage.login('superuser@learnyourbenefits.com', 'lyb@20!9')
        cy.wait(1000)

      cy.url().should('include', '/redirecting')
      cy.url().should('include', '/sites')
      cy.wait(1000)
      cy.visit('http://localhost:4200/manage/sites/358/landing-pages/121/show')
      cy.wait(1000)

    }
  }
  
  export const visitUrl = new VisitUrlClass()
  