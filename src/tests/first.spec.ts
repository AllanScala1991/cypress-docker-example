import Automation from '../services/web'

Automation.doDescribe('Visit google page', () => {
  Automation.doTest('Access google.com', () => {
    Automation.doVisit('www.google.com')
  })
})
