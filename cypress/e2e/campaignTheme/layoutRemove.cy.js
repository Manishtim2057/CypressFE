import { removeLayout } from "../../support/pageObjects/layout/remove"
import { journeyLayout } from "../../support/pageObjects/layout/addLayout"
import { visitUrl } from "../../support/pageObjects/visitSite/visitSite"
import { clickEditLayoutButton } from "../../componentObjects/Layout/layoutButton"
describe('Remove the Layout if It exists', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        visitUrl.visit()
        clickEditLayoutButton()
    })

    it('Remove the Layout if Exists', () => {
        removeAllLayoutsUntilEmpty();

        function removeAllLayoutsUntilEmpty() {
          cy.get('body').then(($body) => {
            if ($body.find(':nth-child(1) > .parent').length > 0) {
              removeLayout.removeAllLayout();
              cy.wait(500); // optional wait to allow DOM update
              removeAllLayoutsUntilEmpty(); // recursive call
            } else {
              cy.log('All layouts have been removed');
            }
          });
        }
        
      });
      
      

})