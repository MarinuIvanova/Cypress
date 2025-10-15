const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "apnuwv",
  e2e: {
    baseUrl: 'https://sqlverifier-staging-08050d656f7a.herokuapp.com//',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
