class inventoryPage {

    elements = {
        tab: () => cy.get("[class='nav nav-tabs']"),
        sort: () => cy.get(".sorting"),
        sort_asc: () => cy.get(".sorting_asc"),
        sort_des: () => cy.get(".sorting_desc"),
        scroll: () => cy.get('#inventory-by-business-type-table_wrapper > .dataTables_scroll > .dataTables_scrollBody'),
        transfer: () => cy.get(':nth-child(1) > th > .btn'),
        fromBusiness: () => cy.get('#transfer_bt_from_business_type'),
        toBusiness: () => cy.get('#transfer_bt_to_business_type'),
        checkBoxTransfer: () => cy.get('[type="checkbox"]')
    }

}
export default new inventoryPage();