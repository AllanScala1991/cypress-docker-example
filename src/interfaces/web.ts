export interface IWebAutomation {
  doDescribe(title: string, callback: any): void

  doTest(title: string, callback: any): void

  doVisit(url: string): void
}
