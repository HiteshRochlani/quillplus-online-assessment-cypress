beforeEach(()=>{
    cy.viewport(1920,1080)
})

after("Generate Report",()=>{
    cy.writeFile("./metadata/BrowserDetails.json",Cypress.browser)
    cy.exec("node cucumber-report-generator.js")
})