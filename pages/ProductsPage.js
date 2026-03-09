class ProductsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.filterDropdown = page.locator('[data-test="product-sort-container"]');
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.productSauceLabsOnesie = page.getByText('Sauce Labs Onesie', { exact: true });
    this.productRedTshirt = page.getByText('Test.allTheThings() T-Shirt (Red)', { exact: true });
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.backToProductsButton = page.getByRole('button', { name: 'Back to products' });
  }

  async selectRandomFilterOption() {
    const filterValues = ['az', 'za', 'lohi', 'hilo'];
    const randomValue = filterValues[Math.floor(Math.random() * filterValues.length)];
    await this.filterDropdown.selectOption(randomValue);
  }

  async clickSauceLabsOnesie() {
    await this.productSauceLabsOnesie.click();
  }

  async clickSecondFilteredItem() {
    await this.inventoryItems.nth(1).locator('[data-test="inventory-item-name"]').click();
  }

  async clickRedTshirtProduct() {
    await this.productRedTshirt.click();
  }

  async clickAddToCart() {
    await this.addToCartButton.click();
  }

  async clickBackToProducts() {
    await this.backToProductsButton.click();
  }

  async addDefaultProductsToCart() {
    await this.clickSauceLabsOnesie();
    await this.clickAddToCart();
    await this.clickBackToProducts();

    await this.clickRedTshirtProduct();
    await this.clickAddToCart();
    await this.clickBackToProducts();
  }
}

module.exports = { ProductsPage };
