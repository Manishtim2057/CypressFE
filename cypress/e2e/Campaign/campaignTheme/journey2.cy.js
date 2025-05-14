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
import { layoutALeft,layoutARight,layoutBLeft ,layoutCLeft ,layoutDLeft,layoutCRight,layoutBRight,layoutDRight, carousel, footer } from "../../../componentObjects/Layout/layoutButton"
import { carousel_items } from "../../../support/pageObjects/layout/carousel"
import { animationDrop } from "../../../componentObjects/Layout/Shared/animationDropDown"
import { addJlayout } from "../../../support/pageObjects/journeyLayout/journeyLayout"
import { addJourneyPopOver } from "../../../support/pageObjects/journeyLayout/journeyPopOver"
import { Journey } from "../../../support/pageObjects/journeyLayout/journeyDropDown"
import { jcarousel_items } from "../../../support/pageObjects/journeyLayout/carousel"
describe('Login Page Tests', () => {

  beforeEach(()=>{
    cy.viewport(1280, 720)   
    visitUrl.visit()


  })
 

  it('Add Header layout', () => {
    journeyLayout.addlayout();
    selectHeaderLayoutCard();
    drop.dropdownAndSelect('32');
    saveButton();
  })

  it('Add Banner Layout', () => {
    journeyLayout.addlayout();
    selectBannerLayoutcard();
    drop.dropdownAndSelect('car-race')
    addJlayout.elements.BannerTitle().type('Felix was diagnosed with Stage IV colon cancer at the age of 48.')
    addJlayout.elements.bannerDesc().type('He was enrolled in Aflac Life Insurance.')
    saveButton()   
  })
  it('Add Layout A left', () => {
    journeyLayout.addlayout();
    layoutALeft();
    drop.dropdownAndSelect('34')
    addJlayout.jLayout('What is life insurance?', 'Click the icon to learn more.');
    animationDrop.animationDropDown('Fade In')
    addJourneyPopOver.elements.icon()
    addJourneyPopOver.popOver(addJourneyPopOver.elements.popOverRight)
    Journey.JourneyPopOverImage('car-race')
    addJourneyPopOver.journeyPopTitleDescription('Left', 'Sample left description');
    addJourneyPopOver.elements.popOverDoneBtn() 
    cy.wait(500)
    saveButton()   
  })
  it('Add Layout A right', () => {
    journeyLayout.addlayout();
    layoutARight();
    drop.dropdownAndSelect('33')
    addJlayout.jLayout('What is life insurance?', 'Click the icon to learn more.');
    animationDrop.animationDropDown('Fade In')
    addJourneyPopOver.elements.icon()
    addJourneyPopOver.popOver(addJourneyPopOver.elements.popOverRight)
    Journey.JourneyPopOverImage('car-race')
    addJourneyPopOver.journeyPopTitleDescription('Left', 'Sample left description');
    addJourneyPopOver.elements.popOverDoneBtn() 
    cy.wait(500)
    saveButton()   
  })
  it('Add Layout B right', () => {
    journeyLayout.addlayout();
    layoutBRight();
    drop.dropdownAndSelect('Unsplash')
    addJlayout.jLayout('His family had concerns about how they would pay for his care, including the potential cost of hospice.','.');
    animationDrop.animationDropDown('Slide In from Left')
   addJourneyPopOver.elements.icon()
    addJourneyPopOver.popOver(addJourneyPopOver.elements.popOverRight)
    Journey.JourneyPopOverImage('car-race')
    addJourneyPopOver.journeyPopTitleDescription('Left', 'Sample left description');
    addJourneyPopOver.elements.popOverDoneBtn() 
    cy.wait(500)
    saveButton()  
  })
  it('Add Layout B left', () => {
    journeyLayout.addlayout();
    layoutBLeft();
    drop.dropdownAndSelect('This art')
    addJlayout.jLayout('Felix reached out to his HR team, and they connected him with Aflac and their Care Manager team.', 'Who are Aflac’s Care Managers?  Click the icon to learn more.');
    animationDrop.animationDropDown('Slide In from right')
   addJourneyPopOver.elements.icon()
    addJourneyPopOver.popOver(addJourneyPopOver.elements.popOverLeft)
    Journey.JourneyPopOverImage('32')
    addJourneyPopOver.journeyPopTitleDescription('Left', 'left- description');
    addJourneyPopOver.elements.popOverDoneBtn() 
    cy.wait(500)
    saveButton()   
  })
  it('Add Layout C right', () => {
    journeyLayout.addlayout();
    layoutCRight();
    drop.dropdownAndSelect('Jeromin')
    addJlayout.jLayout('Aflac’s Care Manager educated Felix about the services included in his life insurance.', '.');
    animationDrop.animationDropDown('Fade In')
   addJourneyPopOver.elements.icon()
    addJourneyPopOver.popOver(addJourneyPopOver.elements.popOverLeft)
    Journey.JourneyPopOverImage('32')
    addJourneyPopOver.journeyPopTitleDescription('Left', 'left- description');
    addJourneyPopOver.elements.popOverDoneBtn() 
    cy.wait(500)
    saveButton()   
  })
  it('Add Layout C left', () => {
    journeyLayout.addlayout();
    layoutCLeft();
    drop.dropdownAndSelect('1mb')
    addJlayout.jLayout('Felix’s life insurance included a service to create a living will.', '.');
    animationDrop.animationDropDown('Slide In from Left')
   addJourneyPopOver.elements.icon()
    addJourneyPopOver.popOver(addJourneyPopOver.elements.popOverLeft)
    Journey.JourneyPopOverImage('32')
    addJourneyPopOver.journeyPopTitleDescription('Left', 'left- description');
    addJourneyPopOver.elements.popOverDoneBtn() 
    cy.wait(500)
    saveButton()  
  })
  it('Add Layout D right', () => {
    journeyLayout.addlayout();
    layoutDRight();
    drop.dropdownAndSelect('2.00')
    addJlayout.jLayout('They also learned about the Beneficiary Companion service.', 'Click the icon to learn more.');
    animationDrop.animationDropDown('Slide In from right')
   addJourneyPopOver.elements.icon()
    addJourneyPopOver.popOver(addJourneyPopOver.elements.popOverLeft)
    Journey.JourneyPopOverImage('32')
    addJourneyPopOver.journeyPopTitleDescription('Left', 'left- description');
    addJourneyPopOver.elements.popOverDoneBtn() 
    cy.wait(500)
    saveButton() 
  })
  it('Add Layout D left', () => {
    journeyLayout.addlayout();
    layoutDLeft();
    drop.dropdownAndSelect('33')
    addJlayout.jLayout('Felixs Aflac Life Insurance included living benefits.', 'Click the icon to learn more.');
    animationDrop.animationDropDown('Fade In')
   addJourneyPopOver.elements.icon()
    addJourneyPopOver.popOver(addJourneyPopOver.elements.popOverLeft)
    Journey.JourneyPopOverImage('32')
    addJourneyPopOver.journeyPopTitleDescription('Left', 'left- description');
    addJourneyPopOver.elements.popOverDoneBtn() 
    cy.wait(500)
    saveButton()    
  })
  it('Add carousel', () => {
    journeyLayout.addlayout();
    carousel();
    jcarousel_items.elements.jCarouselTitle().type('Journey Carousel')
    addJourneyPopOver.elements.jCarouselDesc().type('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.')
    // addlayoutA.verifyModalUI();
    // drop.dropdownAndSelect('car-race')
    // addlayoutA.layoutA('This is the Title', 'This is the description');
    jcarousel_items.elements.carousel_add()
    // addJourneyPopOver.popOver(layoutIcon.elements.popOverLeft)
    // layoutIcon.elements.addButton()
    jcarousel_items.carouselDropAndSelect('32')
    jcarousel_items.carousel_Title_Label_Link_Description('Journey caroursel 1', 'First Click', 'www.google.com', 'Sample Description');
    jcarousel_items.elements.carouselSave()
    jcarousel_items.elements.carousel_add()


    jcarousel_items.carouselDropAndSelect(' car-race')
    jcarousel_items.carousel_Title_Label_Link_Description('Journey caroursel 2', 'Second Click', 'www.youtube.com', 'Sample Description');
    jcarousel_items.elements.carouselSave()
    jcarousel_items.elements.carousel_add()


    jcarousel_items.carouselDropAndSelect( '34')
    jcarousel_items.carousel_Title_Label_Link_Description('Journey caroursel 3', 'Third Click', 'www.facebook.com', 'Sample Description');
    jcarousel_items.elements.carouselSave()
    jcarousel_items.elements.carousel_add()  

    jcarousel_items.carouselDropAndSelect('Unsplash')
    jcarousel_items.carousel_Title_Label_Link_Description('Journey caroursel 4', 'Fourth Click', 'www.onlinekhabar.com', 'Sample Description');
    jcarousel_items.elements.carouselSave()
    jcarousel_items.elements.carousel_add()

    jcarousel_items.carouselDropAndSelect('This art')
    jcarousel_items.carousel_Title_Label_Link_Description('Journey caroursel 5', 'Fifth Click', 'www.sena.learnyourcare.com', 'Sample Description');
    jcarousel_items.elements.carouselSave()
    jcarousel_items.elements.carousel_add()

    jcarousel_items.carouselDropAndSelect('Jeromin')
    jcarousel_items.carousel_Title_Label_Link_Description('Journey caroursel 6', 'Sixth Click', 'www.instagram.com', 'Sample Description');
    jcarousel_items.elements.carouselSave()

    // addJourneyPopOver.journeyPopTitleDescription('Left', 'left- description');
    jcarousel_items.elements.popSave()
    // saveButton()   
  })
  it('Add footer', () => {
    journeyLayout.addlayout();
    footer();
    drop.dropdownAndSelect('33')
    addJlayout.elements.footerTitle().type('Felixs Aflac Life Insurance included living benefits.');
    addJlayout.elements.footerDescription().type('Felixs Aflac Life Insurance included living benefits.');
    cy.wait(500)
    saveButton()    
  })
})
