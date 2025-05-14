import { loginPage } from "../../../support/pageObjects/login/loginPage"
import { clickAddLayoutButton, clickEditLayoutButton, description, editLayoutButton, layoutAddBtn, selectBannerLayoutcard, selectHeaderLayoutCard, title } from "../../../componentObjects/Layout/layoutButton"
import { visitUrl } from "../../../support/pageObjects/visitSite/visitSite"
import { journeyLayout } from "../../../support/pageObjects/layout/addLayout"
import { drop } from "../../../componentObjects/Layout/Shared/dropdown"
import { addButton, popOverSave, saveButton } from "../../../componentObjects/Layout/Shared/shared"
import { addHeader } from "../../../support/pageObjects/layout/addHeader"
import { addBanners } from "../../../support/pageObjects/layout/addBanner"
import { layoutIcon } from "../../../support/pageObjects/layout/iconLink"
import { dropA } from "../../../componentObjects/Layout/Shared/dropdownALayout"
import { addlayoutA } from "../../../support/pageObjects/layout/addLayoutA"
import { popOverTitleAndDescription } from "../../../support/pageObjects/layout/popOver"
import { layoutALeft,layoutARight,layoutBLeft ,layoutCLeft ,layoutDLeft,layoutCRight,layoutBRight,layoutDRight, carousel } from "../../../componentObjects/Layout/layoutButton"
import { carousel_items } from "../../../support/pageObjects/layout/carousel"
import { animationDrop } from "../../../componentObjects/Layout/Shared/animationDropDown"
describe('Login Page Tests', () => {

  beforeEach(()=>{
    cy.viewport(1280, 720)   
    visitUrl.visit()

  })
 

  it('Add Header layout', () => {
    journeyLayout.addlayout();
    selectHeaderLayoutCard();
    addButton();
    addHeader.headers();
    drop.dropdownAndSelect('32');
    saveButton();
  })

  it('Add Banner Layout', () => {
    journeyLayout.addlayout();
    selectBannerLayoutcard();
    addButton();
    addBanners.verifyModalUI();
    drop.dropdownAndSelect('car-race')
    addBanners.layout('Felix was diagnosed with Stage IV colon cancer at the age of 48.', 'He was enrolled in Aflac Life Insurance.');
    saveButton()   
  })
  it('Add Layout A left', () => {
    journeyLayout.addlayout();
    layoutALeft();
    addButton();
    addlayoutA.verifyModalUI();
    drop.dropdownAndSelect('34')
    addlayoutA.layoutA('What is life insurance?', 'Click the icon to learn more.');
    animationDrop.animationDropDown('Fade In')
    layoutIcon.elements.icon()
    layoutIcon.popOver(layoutIcon.elements.popOverLeft)
    layoutIcon.elements.addButton()
    dropA.dropdownAndSelectA('car-race')
    popOverTitleAndDescription.popOver('Left', 'left- description');
    popOverSave()   
    saveButton()   
  })
  it('Add Layout B right', () => {
    journeyLayout.addlayout();
    layoutARight();
    addButton();
    addlayoutA.verifyModalUI();
    drop.dropdownAndSelect('Unsplash')
    addlayoutA.layoutA('His family had concerns about how they would pay for his care, including the potential cost of hospice.','.');
    animationDrop.animationDropDown('Slide In from Left')
    layoutIcon.elements.icon()
    layoutIcon.popOver(layoutIcon.elements.popOverLeft)
    layoutIcon.elements.addButton()
    dropA.dropdownAndSelectA('32')
    popOverTitleAndDescription.popOver('Left', 'left- description');
    popOverSave()   
    saveButton()   
  })
  it('Add Layout B left', () => {
    journeyLayout.addlayout();
    layoutBLeft();
    addButton();
    addlayoutA.verifyModalUI();
    drop.dropdownAndSelect('This art')
    addlayoutA.layoutA('Felix reached out to his HR team, and they connected him with Aflac and their Care Manager team.', 'Who are Aflac’s Care Managers?  Click the icon to learn more.');
    animationDrop.animationDropDown('Slide In from right')
    layoutIcon.elements.icon()
    layoutIcon.popOver(layoutIcon.elements.popOverLeft)
    layoutIcon.elements.addButton()
    dropA.dropdownAndSelectA('32')
    popOverTitleAndDescription.popOver('Left', 'left- description');
    popOverSave()   
    saveButton()   
  })
  it('Add Layout C right', () => {
    journeyLayout.addlayout();
    layoutCRight();
    addButton();
    addlayoutA.verifyModalUI();
    drop.dropdownAndSelect('Jeromin')
    addlayoutA.layoutA('Aflac’s Care Manager educated Felix about the services included in his life insurance.', '.');
    animationDrop.animationDropDown('Fade In')
    layoutIcon.elements.icon()
    layoutIcon.popOver(layoutIcon.elements.popOverLeft)
    layoutIcon.elements.addButton()
    dropA.dropdownAndSelectA('32')
    popOverTitleAndDescription.popOver('Left', 'left- description');
    popOverSave()   
    saveButton()   
  })
  it('Add Layout C left', () => {
    journeyLayout.addlayout();
    layoutCLeft();
    addButton();
    addlayoutA.verifyModalUI();
    drop.dropdownAndSelect('1mb')
    addlayoutA.layoutA('Felix’s life insurance included a service to create a living will. He used it to make sure that his wishes were respected and taken care of.', '.');
    animationDrop.animationDropDown('Slide In from Left')
    layoutIcon.elements.icon()
    layoutIcon.popOver(layoutIcon.elements.popOverLeft)
    layoutIcon.elements.addButton()
    dropA.dropdownAndSelectA('32')
    popOverTitleAndDescription.popOver('Left', 'left- description');
    popOverSave()   
    saveButton()   
  })
  it('Add Layout D right', () => {
    journeyLayout.addlayout();
    layoutDRight();
    addButton();
    addlayoutA.verifyModalUI();
    drop.dropdownAndSelect('2.00')
    addlayoutA.layoutA('They also learned about the Beneficiary Companion service, which can help remove the stress of administrative paperwork after a loss, allowing them to focus on healing.', 'Click the icon to learn more.');
    animationDrop.animationDropDown('Slide In from right')
    layoutIcon.elements.icon()
    layoutIcon.popOver(layoutIcon.elements.popOverLeft)
    layoutIcon.elements.addButton()
    dropA.dropdownAndSelectA('32')
    popOverTitleAndDescription.popOver('Left', 'left- description');
    popOverSave()   
    saveButton()   
  })
  it('Add Layout D left', () => {
    journeyLayout.addlayout();
    layoutDLeft();
    addButton();
    addlayoutA.verifyModalUI();
    drop.dropdownAndSelect('33')
    addlayoutA.layoutA('Felixs Aflac Life Insurance included living benefits, and he received an advance payment that he chose to use to pay for his hospice care and final expenses.', 'Click the icon to learn more.');
    animationDrop.animationDropDown('Fade In')
    layoutIcon.elements.icon()
    layoutIcon.popOver(layoutIcon.elements.popOverLeft)
    layoutIcon.elements.addButton()
    dropA.dropdownAndSelectA('32')
    popOverTitleAndDescription.popOver('Left', 'left- description');
    popOverSave()   
    saveButton()   
  })
  it('Add carousel', () => {
    journeyLayout.addlayout();
    carousel();
    addButton();
    carousel_items.elements.jCarouselTitle().type('Journey Carousel')
    carousel_items.elements.jCarouselDescription().type('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.')
    // addlayoutA.verifyModalUI();
    // drop.dropdownAndSelect('car-race')
    // addlayoutA.layoutA('This is the Title', 'This is the description');
    carousel_items.elements.carousel_add()
    // layoutIcon.popOver(layoutIcon.elements.popOverLeft)
    // layoutIcon.elements.addButton()
    carousel_items.carouselDropAndSelect('32')
    carousel_items.carousel_Title_Label_Link_Description('Journey caroursel 1', 'First Click', 'www.google.com', 'Sample Description');
    carousel_items.elements.carouselSave()
    carousel_items.elements.carousel_add()


    carousel_items.carouselDropAndSelect(' car-race')
    carousel_items.carousel_Title_Label_Link_Description('Journey caroursel 2', 'Second Click', 'www.youtube.com', 'Sample Description');
    carousel_items.elements.carouselSave()
    carousel_items.elements.carousel_add()


    carousel_items.carouselDropAndSelect( '34')
    carousel_items.carousel_Title_Label_Link_Description('Journey caroursel 3', 'Third Click', 'www.facebook.com', 'Sample Description');
    carousel_items.elements.carouselSave()
    carousel_items.elements.carousel_add()  

    carousel_items.carouselDropAndSelect('Unsplash')
    carousel_items.carousel_Title_Label_Link_Description('Journey caroursel 4', 'Fourth Click', 'www.onlinekhabar.com', 'Sample Description');
    carousel_items.elements.carouselSave()
    carousel_items.elements.carousel_add()

    carousel_items.carouselDropAndSelect('This art')
    carousel_items.carousel_Title_Label_Link_Description('Journey caroursel 5', 'Fifth Click', 'www.sena.learnyourcare.com', 'Sample Description');
    carousel_items.elements.carouselSave()
    carousel_items.elements.carousel_add()

    carousel_items.carouselDropAndSelect('Jeromin')
    carousel_items.carousel_Title_Label_Link_Description('Journey caroursel 6', 'Sixth Click', 'www.instagram.com', 'Sample Description');
    carousel_items.elements.carouselSave()

    // popOverTitleAndDescription.popOver('Left', 'left- description');
    carousel_items.elements.popSave()
    // saveButton()   
  })
})
