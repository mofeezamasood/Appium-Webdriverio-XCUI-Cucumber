const { browser } = require("@wdio/globals");
const { expect, $ } = require("@wdio/globals");

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  async getElement(element) {
    return await driver.$(element);
  }

  isClickable() {}

  open(path) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }
};
