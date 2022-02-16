import { IWebAutomation } from 'src/interfaces/web'

export class CypressAdapter implements IWebAutomation {
  doDescribe(title: string, callback: any): void {
    describe(title, callback)
  }

  doTest(title: string, callback: any): void {
    it(title, callback)
  }

  doVisit(url: string): void {
    cy.visit(url)
  }
}
