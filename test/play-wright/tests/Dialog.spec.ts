import { test as base } from '@playwright/test';

const test = base.extend({
  host: async ({}, use) => {
    use('https://material.angular.io/components/dialog/overview');
  },
});

test.describe('Dialog', () => {
  test.describe('Go to Angular Material Dialog page', () => {
    test.beforeEach(async ({ page, host }) => {
      await page.goto(host);
    });

    test('Open Dialog', async ({ page }) => {
      // https://playwright.dev/docs/actionability
      await page.locator('#dialog-overview').getByRole('button', { name: 'Pick One' }).click();
      await page.getByText('Favorite Animal', { exact: true }).click();
      await page.getByLabel('Favorite Animal').fill('tuan');
      await page.getByRole('button', { name: 'Ok' }).click();
      await page.getByText('You chose: tuan').click();
    });
  });
});
