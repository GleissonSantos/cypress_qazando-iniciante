const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't8eunr',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto Cypress',
      reportPageTitle: 'Projeto Curso',
    },
    baseUrl: 'https://www.automationpratice.com.br/',
    defaultCommandTimeout: 5000, // Define um time out padrão para o projeto inteiro
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
