import { Page } from '@playwright/test';
import BasePage from './BasePage';
import ProductElements from '../elements/ProductElements';

export default class ProductPage extends BasePage {
  readonly productElements: ProductElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.productElements = new ProductElements(page);
  }

  async addToCart(): Promise<void> {
    await this.productElements.getAddToCartButton().click();
  }

  async getCartItemCount(): Promise<string> {
    return this.productElements.getCartCount().innerText();
  }
}
