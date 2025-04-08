
// npx cypress run --record --key ce7bfafb-3b32-4b2a-ad72-2cf8f48ab196
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "r3zdnt",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
