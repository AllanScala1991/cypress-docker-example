export interface IWebAutomation {
  doDescribe(title: string, callback: any): void

  doTest(title: string, callback: any): void

  doVisit(url: string): void

  doSetEnv(env: string): string

  doFill(locator: string, text: string): void

  doClick(locator: string): void
}
