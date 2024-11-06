import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ProductElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getAddToCartButton(): Locator {
    return this.page.locator('#add-to-cart-button');
  }

  getCartCount(): Locator {
    return this.page.locator('#nav-cart-count');
  }
}
