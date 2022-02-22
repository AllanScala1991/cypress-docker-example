import Automation from '../services/web'
import { LOGIN, GLOBAL, INVENTORY } from '../locators'

Automation.doDescribe('Swag Labs - LOGIN', () => {
  Automation.doTest('Should validate insert invalid login and password', () => {
    Automation.doVisit(GLOBAL.BASE_URL)
    Automation.doFill(LOGIN.INPUT_USERNAME, 'any name')
    Automation.doFill(LOGIN.INPUT_PASSWORD, 'any password')
    Automation.doClick(LOGIN.BTN_LOGIN)
    Automation.doShould(LOGIN.MODAL_ERROR, 'be.visible')
    Automation.doClick(LOGIN.BTN_CLOSE_MODAL_ERROR)
  })

  Automation.doTest('Should validate login with empty values', () => {
    Automation.doPageReload()
    Automation.doFill(LOGIN.INPUT_USERNAME, 'standard_user')
    Automation.doFill(LOGIN.INPUT_PASSWORD, 'secret_sauce')
    Automation.doClick(LOGIN.BTN_LOGIN)
    Automation.doShould(INVENTORY.SELECT_PRODUCT_SORT, 'be.visible')
  })
})
