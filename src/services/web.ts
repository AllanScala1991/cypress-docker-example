import { CypressAdapter } from 'src/adapters/cypress/cypress.adapter'
import { IWebAutomation } from 'src/interfaces/web'

class WebAutomation implements IWebAutomation {
  constructor(
    private readonly adapter: IWebAutomation = new CypressAdapter(),
  ) {}

  doDescribe(title: string, callback: any): void {
    this.adapter.doDescribe(title, callback)
  }

  doTest(title: string, callback: any): void {
    this.adapter.doTest(title, callback)
  }

  doVisit(url: string): void {
    this.adapter.doVisit(url)
  }
}

export default new WebAutomation()
