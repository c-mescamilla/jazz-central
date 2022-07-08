//import { get } from 'cypress/types/lodash'

class ordersPage {

    elements = {
        tab: () => cy.get('.nav-tabs > li > a'),
        updateButton: () => cy.get('#date-range-custom-btn'),
        createOrderButton: () => cy.get('#submit')
    }

    //Select current date -1
    getStartDate() {
        const dayjs = require('dayjs')
        var textofecha = dayjs().add(-1, 'day').format('MM/DD/YYYY')
        cy.log('fecha:--- ' + dayjs().add(-1, 'day').format('MM/DD/YYYY'))
        cy.get("[name='start_date_report']").clear().type(textofecha).type('{esc}')
    }

    //Select current date
    getEndDate() {
        const dayjs = require('dayjs')
        var textofecha = dayjs().format('MM/DD/YYYY')
        cy.log('fecha:--- ' + dayjs().format('MM/DD/YYYY'))
        cy.get("[name='end_date_report']").clear().type(textofecha).type('{esc}')
    }

    //select 90 days before to the current date
    get90DaysBefore() {
        const dayjs = require('dayjs')
        var textofecha = dayjs().add(-90, 'day').format('MM/DD/YYYY')
        cy.log('fecha:--- ' + dayjs().add(-90, 'day').format('MM/DD/YYYY'))
        cy.get("[name='start_date_report']").clear().type(textofecha).type('{esc}')
    }

    //Fill order details
    fillOrderDetails() {
        cy.contains('div', 'Source Code*').find("[class='select2-selection select2-selection--single']").click().type("  FLAT")
        cy.get('.select2-results__options', { timeout: 10000 }).should("be.visible").contains('Source Code: FLAT').click()
    }

    //Search items by item code
    searchItems() {
        cy.get('.row > :nth-child(1) > :nth-child(1) > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-search__field').type("8S62901")

        cy.get('.select2-results__option--highlighted', { timeout: 10000 }).click()
        cy.get(':nth-child(1) > :nth-child(6) > .add-item-quantity').type('1')
        var count = 0
        var quantityValue = 0
        var valueAvailable = 0
        var quantityColumn
        cy.get("[id='product_info']").find("tr td").each(($fila) => {
            count++
            if (count == 6) {
                cy.get($fila).find("input").each(($column) => {
                    quantityValue = $column.val()
                    quantityColumn = $column
                })
            }
            if (count == 7) {
                cy.get($fila).find("input").each((column) => {

                    valueAvailable = column.val()

                    if (valueAvailable > 0) {
                        cy.get(quantityColumn).clear().type('1')
                    }
                    quantityValue = 0
                    valueAvailable = 0
                    quantityColumn
                })
                count = 0
            }
        })
        cy.get('#add-to-cart', { timeout: 10000 }).click()
    }

    //Select customer and shipping address
    addCustomer() {
        cy.get("#select2-customer-lookup-container").click()
        cy.get('.select2-search__field').type("Erna")
        cy.get('.select2-results__option--highlighted', { timeout: 10000 }).click()

        cy.get("#add-customer-link").click({ force: true })

        cy.get('#shipto-copy-customer').click()
    }

    //Select payment Method
    addPayment() {
        cy.contains('button', ' Add Payment').click()
        cy.wait(300)
        cy.contains('a', 'Next').click({ force: true })
        cy.get('#addPaymentForm').click({ force: true })
        cy.get('.col-sm-8 > #shipto-copy-customer').click({ force: true })
        cy.contains('a', 'Finish').click()
    }

    //Select shipping method
    selectShipping() {
        var arrShipping = []

        cy.get('#ship-code-lookup').find('option').each(($el) => {
            cy.log($el.text())
            arrShipping.push($el.text())
        }).then(() => {
            var randomItem = arrShipping[Math.floor(Math.random() * arrShipping.length)];
            cy.get('#ship-code-lookup').select(randomItem)
            cy.wait(300)
        })
    }


}
export default new ordersPage();