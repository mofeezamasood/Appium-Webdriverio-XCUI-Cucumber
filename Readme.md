# Habo - Habit Tracking App (Appium WebdriverIO Test Suite)

## Overview

This project is an **automated end-to-end test suite** for the Habo habit tracking iOS application using **WebdriverIO** with **Appium** and **Cucumber** (BDD framework).

## Features Tested

- ✅ **App Launch** - Verify successful app installation and launch
- ✅ **Add Habit** - Create new habits with validation
- ✅ **Complete Habit** - Mark habits as completed for specific dates
- ✅ **Edit Habit** - Update existing habit details
- ✅ **Delete Habit** - Remove habits from the app
- ✅ **Habit Validation** - Empty names, long names, and duplicates
- ✅ **Data Persistence** - Habits persist after app restart
- ✅ **UI Behavior** - Scrolling and device orientation changes
- ✅ **Login** - User authentication workflows

## Project Structure

```
appium_webdriver_xcui/
├── features/                          # Cucumber feature files
│   ├── add_habit.feature              # Add new habit scenarios
│   ├── complete_habit.feature         # Mark habit as completed scenarios
│   ├── delete_habit.feature           # Delete habit scenarios
│   ├── edit_habit.feature             # Edit habit scenarios
│   ├── file_launch.feature            # App launch scenarios
│   ├── habit_validation.feature       # Input validation scenarios
│   ├── login.feature                  # Authentication scenarios
│   ├── persistence.feature            # Data persistence scenarios
│   ├── ui_behavior.feature            # UI interaction scenarios
│   ├── pageobjects/                   # Page Object Models
│   │   ├── page.js                    # Base page class
│   │   ├── home.page.js               # Home screen interactions
│   │   └── create.habit.page.js       # Create habit screen
│   └── step-definitions/              # Step implementations
│       ├── given.js                   # Given steps
│       ├── when.js                    # When steps
│       └── then.js                    # Then steps
├── wdio.conf.js                       # WebdriverIO configuration
├── package.json                       # Dependencies
└── Readme.md                          # This file
```

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Appium** (v3.1.2 or higher)
- **XCUITest Driver** for iOS automation
- **iOS Simulator** or physical iOS device
- Habo app installed with bundle ID: `com.pavlenko.Habo.mofi`

## Installation

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd appium_webdriver_xcui
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Install Appium globally (if not already installed):**

   ```sh
   npm install -g appium
   ```

4. **Install XCUITest Driver:**

   ```sh
   appium driver install xcuitest
   ```

5. **Verify Appium installation:**
   ```sh
   appium --version
   ```

## Configuration

Edit [wdio.conf.js](wdio.conf.js) to customize test execution:

### Device Settings

- **`appium:deviceName`** - Target iOS device (e.g., "iPhone 17")
- **`appium:platformVersion`** - iOS version (e.g., "26.2")
- **`appium:app`** - App bundle ID (e.g., "com.pavlenko.Habo.mofi")

### Appium Settings

- **`port`** - Appium server port (default: 4723)
- **`waitforTimeout`** - Default wait timeout for elements (default: 10000ms)

### Reset Options

- **`appium:noReset`** - Keep app data between test runs
- **`appium:fullReset`** - Clear app data (use for clean state testing)

### Logging

- **`logLevel`** - Set to "debug" for detailed logs, "info" for standard output

## Running Tests

### Run all tests:

```sh
npm run wdio
```

### Run specific feature file:

```sh
npx wdio run wdio.conf.js --spec features/add_habit.feature
```

### Run specific scenario by name:

```sh
npx wdio run wdio.conf.js --name "User can add a new habit"
```

### Run tests with tags:

```sh
npx wdio run wdio.conf.js --tagExpression "@smoke"
```

### Run tests in dry-run mode (no execution):

```sh
npx wdio run wdio.conf.js --dryRun
```

## Test Reports

Test results are displayed in the terminal using the **spec reporter**. Output includes:

- ✅ Passed scenarios
- ❌ Failed scenarios with detailed error messages and stack traces
- ⏱️ Execution time for each scenario

## Page Objects & Helper Methods

### HomePage ([home.page.js](features/pageobjects/home.page.js))

Main screen interactions:

- `isOnHomePage()` - Verify home screen is displayed
- `clickAddHabit()` - Click "Add Habit" button
- `isNewHabitDisplaying(habitName)` - Check if habit appears in list
- `completeHabitForGivenDate(habitName, date)` - Mark habit as completed
- `habitListIsVisible()` - Verify habit list exists
- `deleteHabit(habitName)` - Remove a habit from the list
- `editHabit(habitName)` - Edit existing habit

### CreateHabitPage ([create.habit.page.js](features/pageobjects/create.habit.page.js))

Habit creation screen interactions:

- `enterHabitText(habitName)` - Input habit name
- `clickSaveHabitButton()` - Save the habit
- `isCreateHabitScreenDisplayed()` - Verify create screen is visible

### BasePage ([page.js](features/pageobjects/page.js))

Base utilities:

- `pause(milliseconds)` - Wait for specified duration
- `waitForElementDisplayed(selector)` - Wait for element visibility
- `click(selector)` - Click an element
- `setValue(selector, value)` - Set text input value

## Step Definitions

### Given Steps ([given.js](features/step-definitions/given.js))

Setup and preconditions:

- "the Habo app is installed"
- "the Habo app is launched"
- "a habit named {string} exists"

### When Steps ([when.js](features/step-definitions/when.js))

User actions:

- "I launch the Habo app"
- "I tap on the Add Habit button"
- "I enter {string} as the habit name"
- "I tap on the Save Habit button"
- "I mark the habit {string} as completed for date {string}"
- "I delete the habit {string}"
- "I edit the habit {string}"

### Then Steps ([then.js](features/step-definitions/then.js))

Assertions and verifications:

- "an empty habit list should be visible on first launch"
- "the home screen should be displayed"
- "the habit {string} should appear in the habit list"
- "the habit {string} should be marked as completed for date {string}"
- "the habit {string} should not appear in the habit list"

## Debugging

### Enable Detailed Logging

Modify [wdio.conf.js](wdio.conf.js):

```javascript
logLevel: "debug",  // Change from "info" to "debug"
```

### Take Screenshots on Failure

Enable in Cucumber hooks to capture device state when tests fail.

### Inspect Element Selectors

Use Xcode Inspector or Appium Inspector to verify XPath selectors:

```sh
appium inspector
```

## Common Issues & Solutions

| Issue                         | Solution                                                          |
| ----------------------------- | ----------------------------------------------------------------- |
| **App not found**             | Verify bundle ID matches installed app in `wdio.conf.js`          |
| **Elements not found**        | Use Appium Inspector to verify XPath/ID selectors in page objects |
| **Connection refused**        | Ensure Appium server running: `appium --port 4723`                |
| **Timeout errors**            | Increase `waitforTimeout` in config or add explicit waits         |
| **Simulator not responding**  | Restart simulator: `xcrun simctl erase all`                       |
| **XCUITest driver not found** | Reinstall: `appium driver install xcuitest`                       |
| **Permission denied**         | Check iOS app permissions in simulator settings                   |

## Technology Stack

- **WebdriverIO** (v9.23.2) - E2E test framework
- **Appium** (v3.1.2) - Mobile automation server
- **Cucumber** (v9.23.2) - BDD testing framework
- **XCUITest Driver** (v10.18.1) - iOS native automation
- **Node.js** (v18+) - JavaScript runtime

## Best Practices

1. **Use Page Objects** - Encapsulate selectors and interactions
2. **Write Readable Scenarios** - Use Gherkin for business-readable tests
3. **Keep Steps Reusable** - Write generic step definitions
4. **Isolate Tests** - Each scenario should be independent
5. **Use Meaningful Names** - Clear test names aid debugging
6. **Avoid Hard Waits** - Use explicit waits on elements instead of `pause()`
7. **Clean Up State** - Reset app data between test runs when needed

## Contributing

1. Create a feature branch: `git checkout -b feature/new-test`
2. Write feature files in Gherkin syntax
3. Implement step definitions in step-definitions folder
4. Add page object methods as needed
5. Run tests before committing: `npm run wdio`
6. Submit a pull request

## Continuous Integration

For CI/CD pipelines (GitHub Actions, Jenkins, etc.):

```sh
# Install dependencies
npm ci

# Start Appium server
appium --port 4723 &

# Run tests
npm run wdio

# Generate reports (optional)
npm run report
```

## License

ISC

## Author

Mofeeza Masood

## Resources

- [WebdriverIO Documentation](https://webdriver.io/)
- [Appium Documentation](https://appium.io/)
- [Cucumber Documentation](https://cucumber.io/)
- [XCUITest Documentation](https://developer.apple.com/documentation/xctest)
- [Gherkin Syntax Guide](https://cucumber.io/docs/gherkin/)
