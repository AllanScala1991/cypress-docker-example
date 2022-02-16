import Automation from '../services/web'

Automation.doDescribe('Swag Labs - LOGIN', () => {
  Automation.doTest('Insert invalid login and password', () => {
    Automation.doVisit(Automation.doSetEnv('BASE_URL'))
  })
})
