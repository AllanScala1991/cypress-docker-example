require('dotenv').config()

/**
 * @type {Cypress.PluginConfig}
 */
// cypress/plugins/index.js
module.exports = (on: any, config: { env: NodeJS.ProcessEnv }) => {
  // modify env value
  config.env = process.env

  // return config
  return config
}
