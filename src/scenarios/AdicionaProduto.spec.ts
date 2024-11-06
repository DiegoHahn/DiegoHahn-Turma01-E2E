import { expect, test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';
import ProductPage from '../support/pages/ProductPage';

test.describe('Adicionar Produto ao Carrinho', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePage: HomePage;
  let productPage: ProductPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.amazon')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
  });

  test('Acessar o primeiro resultado de creatina e adicioná-lo ao carrinho', async () => {
    await homePage.searchProductByName();
    await homePage.clickFirstProduct();
    await productPage.addToCart();

    const cartCount = await productPage.getCartItemCount();
    expect(cartCount).toBe('1');
  });
});
