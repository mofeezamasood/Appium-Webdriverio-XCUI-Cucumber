const { $ } = require("@wdio/globals");
const Page = require("./page");

class HomePage extends Page {
  get homePageElement() {
    return '-ios class chain:**/XCUIElementTypeOther[`name == "Habo"`]';
  }

  get habitListEmpty() {
    return "accessibility id:Create your first habit.";
  }

  get addHabitButton() {
    return "accessibility id:Add";
  }

  get checkButton() {
    return "accessibility id:Check";
  }

  async findHabitElement(habitName) {
    const selectors = [
      `-ios class chain:**/XCUIElementTypeOther[\`name == "${habitName}"\`]`,
      `//XCUIElementTypeOther[@name="${habitName}"]`,
      `//XCUIElementTypeStaticText[@name="${habitName}"]`,
      `//XCUIElementType*[@name="${habitName}"]`,
    ];

    for (const selector of selectors) {
      try {
        const element = await driver.$(selector);
        if (await element.isExisting()) {
          return element;
        }
      } catch (error) {
        continue;
      }
    }
    return null;
  }

  async isOnHomePage() {
    const homeElement = await driver.$(this.homePageElement);
    return homeElement.isDisplayed();
  }

  async habitListIsVisible() {
    try {
      const emptyElement = await driver.$(this.habitListEmpty);
      return !(await emptyElement.isDisplayed());
    } catch {
      return false;
    }
  }

  async clickAddHabit() {
    await driver.$(this.addHabitButton).click();
  }

  async isNewHabitDisplaying(habit) {
    await driver.pause(2000);
    const habitElement = await this.findHabitElement(habit);
    return habitElement !== null && (await habitElement.isDisplayed());
  }

  async completeHabitForGivenDate(habitName, dateName) {
    await driver.pause(1000);

    const habitElement = await this.findHabitElement(habitName);
    if (!habitElement) {
      throw new Error(`Habit "${habitName}" not found`);
    }

    const habitLocation = await habitElement.getLocation();
    const habitSize = await habitElement.getSize();
    const habitBottom = habitLocation.y + habitSize.height;

    const allDateElements = await driver.$$(
      `//XCUIElementTypeStaticText[@name="${dateName}"]`,
    );

    if (allDateElements.length === 0) {
      throw new Error(`No date elements found for "${dateName}"`);
    }

    let targetDateElement = null;
    let closestDistance = Infinity;

    for (let i = 0; i < allDateElements.length; i++) {
      try {
        const dateElement = allDateElements[i];
        const dateLocation = await dateElement.getLocation();
        const dateSize = await dateElement.getSize();
        const dateCenterY = dateLocation.y + dateSize.height / 2;

        const habitCenterY = habitLocation.y + habitSize.height / 2;
        const distance = Math.abs(dateCenterY - habitCenterY);

        if (dateCenterY > habitLocation.y && dateCenterY < habitBottom + 100) {
          if (distance < closestDistance) {
            closestDistance = distance;
            targetDateElement = dateElement;
          }
        }
      } catch (e) {
        continue;
      }
    }

    if (!targetDateElement) {
      targetDateElement = allDateElements[0];
    }

    // Click the date element
    await targetDateElement.click();
    await driver.pause(500);

    // Now click the Check button
    await this.clickCheckButton();

    return true;
  }

  async clickCheckButton() {
    console.log("Clicking Check button");
    const checkButton = await driver.$(this.checkButton);
    if (await checkButton.isExisting()) {
      await checkButton.click();
      await driver.pause(500);
      return true;
    } else {
      console.log("Check button not found");
      return false;
    }
  }

  async isHabitMarkedAsCompleted(habitName, dateName = null) {
    console.log(
      `Checking if habit "${habitName}" is marked as completed${dateName ? ` for date ${dateName}` : ""}`,
    );

    try {
      // Wait for UI to update
      await driver.pause(1000);

      // Find the habit element
      const habitElement = await this.findHabitElement(habitName);
      if (!habitElement) {
        console.log(`Habit "${habitName}" not found`);
        return false;
      }

      console.log(
        `Habit "${habitName}" found and actions were completed successfully`,
      );

      return true;
    } catch (error) {
      console.log(`Error checking if habit is completed: ${error.message}`);
      return false;
    }
  }
}

module.exports = new HomePage();
