class CartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.productBoltTshirt = page.getByText('Sauce Labs Bolt T-Shirt', { exact: true });
    this.addBoltTshirtToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    this.shoppingCartLink = page.locator('#shopping_cart_container:visible');
    this.removeProductButton = page.getByRole('button', { name: 'Remove' });
  }

  async clickAddBoltTshirtToCart() {
    await this.addBoltTshirtToCartButton.click();
  }

  async openShoppingCart() {
    await this.shoppingCartLink.click();
  }

  async clickRemoveProduct() {
    await this.removeProductButton.click();
  }
}

module.exports = { CartPage };
