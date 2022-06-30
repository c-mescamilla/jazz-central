class tenantPage {

    elements = {
        tenantList: () => cy.get('#view-as-tenant-select')
    }

//creates array that gets all elements of the tenant dropdown
selectParentTenant() {
    var arrItems = []
    cy.get('#view-as-tenant-select').find('option').each(($el) => {
        cy.log($el.text())
        arrItems.push($el.text())
    }).then(() => {
        var randomItem = arrItems[Math.floor(Math.random() * arrItems.length)];
        cy.log(randomItem)
        cy.get('#view-as-tenant-select').select(randomItem)
    })
    cy.wait(3000)
}
//creates array that gets only the child elements of the tenant dropdown
selectChildTenant() {
    var arrItems = []
    var arroptions = []
    cy.get('#view-as-tenant-select').find('optgroup').each(($el, index) => {
        arroptions.push((index + 1))
    }).then(() => {
        var randomOptions = arroptions[Math.floor(Math.random() * arroptions.length)];
        cy.get('#view-as-tenant-select').children().eq(randomOptions).find('option').each(($el, index) => {
            cy.log($el.text())
            arrItems.push($el.text())
        })
    }).then(() => {
        var randomItem = arrItems[Math.floor(Math.random() * arrItems.length)];
        cy.log(randomItem)
        cy.get('#view-as-tenant-select').select(randomItem)
    })
    cy.wait(3000)
}
}
export default new tenantPage();