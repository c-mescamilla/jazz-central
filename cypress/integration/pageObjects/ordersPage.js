class ordersPage {
    
    elements = {
        openTab: () => cy.get('.tabs-container > .nav > .active > a')
    }

getStartDate() {
    var startDate = cy.clock(now)
    cy.log(startDate)
    cy.get("[name='start_date_report']").type(startDate)
}

}
export default new ordersPage();