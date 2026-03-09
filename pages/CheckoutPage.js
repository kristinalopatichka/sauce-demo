class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.shoppingCartLink = page.locator('#shopping_cart_container:visible');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    this.firstNameField = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameField = page.getByRole('textbox', { name: 'Last Name' });
    this.zipPostalCodeField = page.getByRole('textbox', { name: 'Zip/Postal Code' });
    this.continueButton = page.locator('#continue');
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.firstNameRequiredErrorHeading = page.getByRole('heading', {
      name: 'Error: First Name is required'
    });
    this.thankYouHeading = page.getByRole('heading', { name: 'Thank you for your order!' });
    this.backHomeButton = page.getByRole('button', { name: 'Back Home' });
  }

  async openCart() {
    await this.shoppingCartLink.click();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async fillFirstName(firstName) {
    await this.firstNameField.click();
    await this.firstNameField.fill(firstName);
  }

  async fillLastName(lastName) {
    await this.lastNameField.click();
    await this.lastNameField.fill(lastName);
  }

  async fillZipPostalCode(zipPostalCode) {
    await this.zipPostalCodeField.click();
    await this.zipPostalCodeField.fill(zipPostalCode);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async clickFinish() {
    await this.finishButton.click();
  }

  async clickBackHome() {
    await this.backHomeButton.click();
  }
}

module.exports = { CheckoutPage };
