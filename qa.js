const { defineConfig } = require("cypress");
const baseConfig = require("./cypress.config");

module.exports = defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl: "https://parabank.parasoft.com/parabank", // Prod URL
  },
  env: {
    // projectName: "Smoke Testing",
    // environment: "prod - preview",
    // authToken: "Bearer STATIC_TOKEN_123"
  }
});