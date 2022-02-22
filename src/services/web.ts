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

  doSetEnv(env: string): string {
    return this.adapter.doSetEnv(env)
  }

  doFill(locator: string, text: string): void {
    this.adapter.doFill(locator, text)
  }

  doClick(locator: string): void {
    this.adapter.doClick(locator)
  }

  doShould(locator: string, validator: string): void {
    this.adapter.doShould(locator, validator)
  }

  doExpect(locator: string, validator: string): void {
    this.adapter.doExpect(locator, validator)
  }

  doCompare(firstValue: string, secondValue: string, validator: string): void {
    this.adapter.doCompare(firstValue, secondValue, validator)
  }
}

export default new WebAutomation()
