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

  async click(element) {
    const el = await this.getElement(element);
    return await el.click();
  }
};
