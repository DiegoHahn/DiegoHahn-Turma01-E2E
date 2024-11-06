import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSearchField(): Locator {
    return this.page.locator('#twotabsearchtextbox');
  }

  getSearchButton(): Locator {
    return this.page.locator('#nav-search-submit-button');
  }

  getFirstProductLink(): Locator {
    return this.page
      .locator('div.s-result-item a.a-link-normal.s-no-outline')
      .first();
  }
}
