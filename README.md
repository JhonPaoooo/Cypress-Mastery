# Swag Labs Demo Website Automation using Cypress JS 😎
  This test automation sample project contains Swag Labs Demo Website using Cypress for testing. It includes tests for Login features with the ability to run them in headless and headed modes. 

  ## Table of Contents 📚

- [Installation](#installation)
- [Running the Tests](#running-the-tests)
  - [Headless Mode](#headless-mode)
  - [Headed Mode](#headed-mode)
- [Features](#features)

---

## Installation 🛠️

### 1. Create a Project Folder
- First, create a project folder named Cypress-Projects on your Desktop (or in your preferred location):

- Windows: Navigate to your Desktop, right-click, and select New Folder. Name it Cypress-Projects.

### 2. Clone the Repository

```bash
git clone https://github.com/JhonPaoooo/Cypress-Mastery.git
```
### 3. Install Dependencies

```bash
npm cypress install
```

## Running the Tests 🏃‍♂️
- We have spec file (a Test Code/File) Login and Registration features, and they can be run in both headless and headed modes.

### Headless Mode 🧑‍💻 (Without Browser UI)

1. Login Test - Invalid (Headless)
- To run the login test with valid credentials in headless mode:

```bash
npm run login-test
```
### Headed Mode 🖥️ (With Browser UI)
- In headed mode, the browser runs with a visible UI. This mode is useful for debugging and visual verification of test actions.

1. Login Test - Valid (Headed)
- To run the login test with valid credentials in headed mode:

```bash
npx cypress open
```


## Features ✨

- **Login Test - Valid**: Automates the login functionality using valid credentials on the Swag Labs Demo website.
- **Login Test - Invalid**: Automates the login functionality using invalid credentials on the Swag Labs Demo website.
- **Headless Mode**: Run the tests without opening the browser window for faster execution.
- **Headed Mode**: Run the tests with the browser window open, useful for debugging and visual checks.
