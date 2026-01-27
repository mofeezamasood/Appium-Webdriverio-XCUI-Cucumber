const { When } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const HomePage = require("../pageobjects/home.page");
const CreatePage = require("../pageobjects/create.habit.page");

const pages = {
  home: HomePage,
  habit: CreatePage,
};

When("I launch the Habo app", async () => {
  console.log("Checking to see if the app is launched");

  const myelemt = await pages["home"].isOnHomePage();

  // await expect(await pages["home"].isOnHomePage());

  await expect(myelemt).toBe(true);
  console.log("App is launched");
});

When("I tap on the Save Habit button", async () => {
  console.log("Pressing save habit button");
  await expect(await pages["habit"].clickSaveHabitButton());
  console.log(`Clicked save habit button`);
});

When("I enter {string} as the habit name", async (s) => {
  console.log(`Entering ${s} as habit`);
  await expect(await pages["habit"].enterHabitText(s));
  console.log(`Entered ${s} as habit`);
});

When("I tap on the Add Habit button", async () => {
  console.log("Tapping on the Add Habit Button");
  await expect(await pages["home"].clickAddHabit());
  console.log("Add Habit Button Tapped");
});

When(
  "I mark the habit {string} as completed for date {string}",
  async (habitName, dateName) => {
    console.log(`Marking habit ${habitName} as completed for date ${dateName}`);
    await pages["home"].completeHabitForGivenDate(habitName, dateName);
    console.log(`Marked habit ${habitName} as completed for date ${dateName}`);
  },
);

When("I save the habit changes", () => {
  // Write code here that turns the phrase above into concrete actions
});

When("I update the habit name to {string}", (s) => {
  // Write code here that turns the phrase above into concrete actions
});

When("I open the habit {string}", (s) => {
  // Write code here that turns the phrase above into concrete actions
});

When("I confirm the deletion", () => {
  // Write code here that turns the phrase above into concrete actions
});

When("I delete the habit {string}", (s) => {
  // Write code here that turns the phrase above into concrete actions
});

When("I relaunch the Habo app", () => {
  // Write code here that turns the phrase above into concrete actions
});

When("I close the Habo app", () => {
  // Write code here that turns the phrase above into concrete actions
});

When("I leave the habit name empty", () => {
  // Write code here that turns the phrase above into concrete actions
});

When("I enter a very long habit name", () => {
  // Write code here that turns the phrase above into concrete actions
});

When("I try to add another habit named {string}", (s) => {
  // Write code here that turns the phrase above into concrete actions
});

When("I scroll the habit list", () => {
  // Write code here that turns the phrase above into concrete actions
});

When("I rotate the device", () => {
  // Write code here that turns the phrase above into concrete actions
});
