const { $ } = require("@wdio/globals");
const Page = require("./page");

class CreateHabit extends Page {
  get getHabitTextField() {
    return "XCUIElementTypeTextField"; // Use this selector from your original code
  }

  get saveHabitButton() {
    return "accessibility id:Save";
  }

  async enterHabitText(habit) {
    const textField = await driver.$(this.getHabitTextField);
    await textField.setValue(habit);
  }

  async clickSaveHabitButton() {
    await driver.$(this.saveHabitButton).click();
  }
}

module.exports = new CreateHabit();
