const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { SAUCE_DEMO_URLS, SAUCE_DEMO_VALID_CREDENTIALS } = require('../config/env');
const {
  SAUCE_DEMO_ACCEPTED_USERS,
  SAUCE_DEMO_ERROR_MESSAGES
} = require('../fixtures/sauceDemoData');

test('Users can successfully Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Use one of the accepted usernames for a successful login path.
  const username = SAUCE_DEMO_VALID_CREDENTIALS.username;
  expect(SAUCE_DEMO_ACCEPTED_USERS).toContain(username);

  await loginPage.login(username, SAUCE_DEMO_VALID_CREDENTIALS.password);
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.inventory);
});

test('User cannot login with random password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Use one of the accepted usernames for a successful login path.
  const username = SAUCE_DEMO_VALID_CREDENTIALS.username;
  expect(SAUCE_DEMO_ACCEPTED_USERS).toContain(username);

  const randomSuffix = Date.now();
  const randomPassword = `pass_${randomSuffix}`;

  await loginPage.login(username, randomPassword);

  await expect(page).not.toHaveURL(SAUCE_DEMO_URLS.inventory);
  await expect(page.locator('[data-test="error"]')).toContainText(
    SAUCE_DEMO_ERROR_MESSAGES.invalidCredentials
  );
});

test('User cannot login with random username and random password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const randomSuffix = Date.now();
  const randomUsername = `user_${randomSuffix}`;
  const randomPassword = `pass_${randomSuffix}`;

  await loginPage.login(randomUsername, randomPassword);

  await expect(page).not.toHaveURL(SAUCE_DEMO_URLS.inventory);
  await expect(page.locator('[data-test="error"]')).toContainText(
    SAUCE_DEMO_ERROR_MESSAGES.invalidCredentials
  );
});