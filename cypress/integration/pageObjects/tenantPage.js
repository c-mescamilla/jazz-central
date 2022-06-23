class tenantPage {

    elements = {
        tenantList: () => cy.get('#view-as-tenant-select')
    }

clickTenant() {
    this.elements.clickTenant().select();
}
}