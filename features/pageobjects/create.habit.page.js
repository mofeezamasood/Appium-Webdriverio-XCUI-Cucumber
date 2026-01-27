const { $ } = require("@wdio/globals");
const Page = require("./page");

class CreateHabit extends Page {
  get getHabitTextField() {
    return "XCUIElementTypeTextField";
  }

  get saveHabitButton() {
    return "accessibility id:Save";
  }
  /////////////////////////////////////////////////////////////

  async enterHabitText(habit) {
    await super.click(this.getHabitTextField);
    console.log("text field clicked");

    const textfield = await super.getElement(this.getHabitTextField);
    await textfield.addValue(habit);
  }

  async clickSaveHabitButton() {
    await super.click(this.saveHabitButton);
  }
}

module.exports = new CreateHabit();
