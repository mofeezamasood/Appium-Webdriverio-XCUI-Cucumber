const { $ } = require("@wdio/globals");
const Page = require("./page");

class HomePage extends Page {
  get homePageElement() {
    return '-ios class chain:**/XCUIElementTypeOther[`name == "Habo"`]';
  }

  get archieveHabitsButton() {
    return '//XCUIElementTypeButton[@name="Archived Habits\nView archived habits"]';
  }

  get statisticsButton() {
    return '//XCUIElementTypeButton[@name=\"Statistics\nStatistics\"]';
  }

  get getSettingsButton() {
    return '//XCUIElementTypeButton[@name=\"Settings\nSettings\"]';
  }

  get habitListEmpty() {
    return "accessibility id:Create your first habit.";
  }

  get habitListFilled() {
    return `-ios class chain:**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther[4]/XCUIElementTypeOther[2]/XCUIElementTypeScrollView`;
  }

  get addHabitButton() {
    return "accessibility id:Add";
  }

  async newHabitSelector(habit) {
    console.log("inside newHabitSelector");
    return await driver.$$(
      `-ios class chain:**/XCUIElementTypeOther[\`name == "${habit}"\`]`,
    );
  }

  /////////////////////////////////////////////////////////////

  async isOnHomePage() {
    if (
      (await super.getElement(this.homePageElement)).isDisplayed() &&
      (await super.getElement(this.archieveHabitsButton)).isDisplayed() &&
      (await super.getElement(this.statisticsButton)).isDisplayed() &&
      (await super.getElement(this.getSettingsButton)).isDisplayed()
    ) {
      console.log("User is on Homepage");
      return true;
    } else {
      return false;
    }
  }

  async habitListIsVisible() {
    if ((await super.getElement(this.habitListEmpty)).isDisplayed()) {
      console.log("list is empty");
      return false;
    } else if ((await super.getElement(this.habitListFilled)).isDisplayed()) {
      console.log("list is filled");
      return true;
    } else {
      return false;
    }
  }

  async lastHabitFound(habit) {
    const items = await this.newHabitSelector(habit);
    return await items.at(-1);
  }

  async firstHabitFound(habit) {
    console.log("inside firstHabitFound");
    const items = await this.newHabitSelector(habit);
    return await items.at(0);
  }

  async clickAddHabit() {
    await super.click(this.addHabitButton);
  }

  async isNewHabitDisplaying(habit) {
    const lastitem = await this.lastHabitFound(habit);
    await lastitem.waitForDisplayed({
      timeout: 5000,
    });
    return true;
  }

  async existingHabitFinder(habit) {
    const firstitem = await this.firstHabitFound(habit);
    console.log(`first item ${firstitem}`);
    await firstitem.waitForDisplayed({
      timeout: 5000,
    });
    return true;
  }
}

module.exports = new HomePage();
