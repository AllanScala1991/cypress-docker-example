import { IWebAutomation } from 'src/interfaces/web'

export class CypressAdapter implements IWebAutomation {
  constructor(private TIMEOUT: number = 30000) {}

  doDescribe(title: string, callback: any): void {
    describe(title, callback)
  }

  doTest(title: string, callback: any): void {
    it(title, callback)
  }

  doVisit(url: string): void {
    cy.visit(url)
  }

  doSetEnv(env: string): string {
    return Cypress.env(env)
  }

  doFill(locator: string, text: string): void {
    cy.get(locator, { timeout: this.TIMEOUT }).type(text)
  }

  doClick(locator: string): void {
    cy.get(locator, { timeout: this.TIMEOUT }).click({ force: true })
  }

  doShould(locator: string, validator: string): void {
    cy.get(locator, { timeout: this.TIMEOUT }).should(validator)
  }

  doPageReload(): void {
    cy.reload()
  }
}
