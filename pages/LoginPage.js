const { SAUCE_DEMO_BASE_URL } = require('../config/env');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator('#user-name');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async navigate() {
    await this.page.goto(`${SAUCE_DEMO_BASE_URL}/`);
  }

  async enterUsername(username) {
    await this.usernameField.click();
    await this.usernameField.fill(username);
  }

  async enterPassword(password) {
    await this.passwordField.click();
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(username, password) {
    await this.navigate();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}

module.exports = { LoginPage };
