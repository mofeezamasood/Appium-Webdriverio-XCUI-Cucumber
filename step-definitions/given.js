const { Given } = require("@wdio/cucumber-framework");
const HomePage = require("../pageobjects/home.page");

Given("the Habo app is installed", async () => {
  await expect(driver.isAppInstalled("com.pavlenko.Habo.mofi")).toBeTruthy();
});

Given("the Habo app is launched", async () => {
  await expect(await HomePage.isOnHomePage()).toBe(true);
});

Given("a habit named {string} exists", async (habitName) => {
  await expect(await HomePage.isNewHabitDisplaying(habitName)).toBe(true);
});
