const { $ } = require("@wdio/globals");
const Page = require("./page");

class HomePage extends Page {
  get homePageElement() {
    return '-ios class chain:**/XCUIElementTypeOther[`name == "Habo"`]';
  }

  get archieveHabitsButton() {
    return driver.$(
      'xpath://XCUIElementTypeButton[@name="Archived Habits\nView archived habits"]',
    );
  }

  get statisticsButton() {
    return driver.$(
      'xpath://XCUIElementTypeButton[@name="Statistics\nStatistics"]',
    );
  }

  get getSettingsButton() {
    return driver.$(
      'xpath://XCUIElementTypeButton[@name="Settings\nSettings"]',
    );
  }

  async isOnHomePage() {
    console.log("user is on the homepage");
    return await super.getElement(this.homePageElement);
  }

  open() {
    return super.open("login");
  }
}

module.exports = new HomePage();
