class pagesCommon {

    elements = {
        menuList: () => cy.get('#side-menu > li > a > span'),
        secondmenuList: () => cy.get('#side-menu > li > ul > li > a'),
        thirdmenuList: () => cy.get('#side-menu > li > ul > li > ul > li > a'),

    }

    //select a specific tenant
    selectSpecificTenant(tenant) {
        cy.get("#view-as-tenant-select").select(tenant)
        cy.wait(3000)
    }
}
export default new pagesCommon();