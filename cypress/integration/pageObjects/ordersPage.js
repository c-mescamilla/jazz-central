class ordersPage {

    //selectOptionView(option) {
        //cy.get(':nth-child(6) > .nav > :nth-child(3) > a').click()
    //}
    switchMenu(option) {
    var opt = option;
    switch (opt) {
        case 'View Orders':
            cy.get(':nth-child(6) > .nav > :nth-child(3) > a').click()
            break;
        case 'Create Orders':
            cy.get(':nth-child(6) > .nav > :nth-child(2) > a').click()
            break;
        default:
            break;
    
    }
}


}
export default new ordersPage();