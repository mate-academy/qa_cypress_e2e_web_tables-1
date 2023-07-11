const { defineConfig } = require('cypress');
const faker = require('faker');


module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://demoqa.com/webtables',
    "viewportWidth": 500,
    "viewportHeight": 768
  }
});