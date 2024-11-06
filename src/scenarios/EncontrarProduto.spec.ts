import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';

test.describe('Find Products', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePage: HomePage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.amazon')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    homePage = new HomePage(page);
  });

  test('Pesquisar creatina e acessar o primeiro produto', async () => {
    await homePage.searchProductByName();
    await homePage.clickFirstProduct();
  });
});
