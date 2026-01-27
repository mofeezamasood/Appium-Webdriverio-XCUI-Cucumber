const { Given } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const HomePage = require("../pageobjects/home.page");

const pages = {
  home: HomePage,
};

// Given(/^I am on the (\w+) page$/, async (page) => {
//   await pages[page].open();
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//   await LoginPage.login(username, password);
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//   await expect(SecurePage.flashAlert).toBeExisting();
//   await expect(SecurePage.flashAlert).toHaveText(
//     expect.stringContaining(message),
//   );
// });

Given("the Habo app is installed", async () => {
  console.log("Checking to see if the app is installed");
  const bundleid = "com.pavlenko.Habo.mofi";
  await expect(driver.isAppInstalled(bundleid));
  console.log("App is installed");
});

Given("the Habo app is launched", async () => {
  console.log("Checking to see if the app is launched");

  const myelemt = await pages["home"].isOnHomePage();

  await expect(myelemt).toBe(true);
  console.log("App is launched");
});

Given("a habit named {string} exists", async (s) => {
  console.log(`Checking to see if habit ${s} exists`);

  const myelemt = await pages["home"].isNewHabitDisplaying(s);
  await expect(myelemt).toBe(true);

  console.log(`Habit ${s} exists`);
});

Given("multiple habits exist", () => {
  // Write code here that turns the phrase above into concrete actions
});
