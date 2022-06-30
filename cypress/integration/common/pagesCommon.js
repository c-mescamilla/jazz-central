class pagesCommon {

    elements = {
        menuList: () => cy.get('#side-menu > li > a > span'),
        secondmenuList: () => cy.get('#side-menu > li > ul > li > a'),
        thirdmenuList: () => cy.get('#side-menu > li > ul > li > ul > li > a'),

    }
}
export default new pagesCommon();