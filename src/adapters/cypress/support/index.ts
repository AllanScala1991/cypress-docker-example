beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})
