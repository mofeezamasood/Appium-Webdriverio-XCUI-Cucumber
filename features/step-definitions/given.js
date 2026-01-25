const { Given } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");

const pages = {
  login: LoginPage,
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

Given("the Habo app is launched", () => {
  // Write code here that turns the phrase above into concrete actions
});

Given("a habit named {string} exists", (s) => {
  // Write code here that turns the phrase above into concrete actions
});

Given("multiple habits exist", () => {
  // Write code here that turns the phrase above into concrete actions
});
