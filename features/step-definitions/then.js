const { Then } = require("@wdio/cucumber-framework");
const HomePage = require("../pageobjects/home.page");

Then("an empty habit list should be visible on first launch", async () => {
  await expect(await HomePage.habitListIsVisible()).toBe(false);
});

Then("the home screen should be displayed", async () => {
  await expect(await HomePage.isOnHomePage()).toBe(true);
});

Then(
  "the habit {string} should appear in the habit list",
  async (habitName) => {
    await expect(await HomePage.isNewHabitDisplaying(habitName)).toBe(true);
  },
);

Then(
  "the habit {string} should be marked as completed for date {string}",
  async (habitName, dateName) => {
    await expect(
      await HomePage.isHabitMarkedAsCompleted(habitName, dateName),
    ).toBe(true);
  },
);
