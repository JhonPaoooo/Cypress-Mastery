const { defineConfig } = require("cypress");
const baseConfig = require("./cypress.config");

module.exports = defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl: "https://www.saucedemo.com/", // QA URL
  },
  env: {
    projectName: "QA API Testing",
    environment: "qa",
    authToken: "Bearer STATIC_TOKEN_123"
  }
});