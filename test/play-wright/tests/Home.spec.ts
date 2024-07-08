import { test as base } from '@playwright/test';

const test = base.extend({
  userNameFromEnv: async ({}, use) => {
    const userName = process.env.USER_NAME as string;
    await use(userName);
  },
  companyFromEnv: async ({}, use) => {
    const company = process.env.COMPANY as string;
    await use(company);
  },
  user: async ({ request }, use) => {
    const response = await request.get('http://localhost:3456/folders/linh@1.co');
    const user: any = await response.json();
    await use(user);
  },
  useNameFromApi: async ({ user }, use) => {
    await use(user.name);
  },
  companyFromApi: async ({ user }, use) => {
    await use(user.description);
  },
});

test.describe('Home', () => {
  test('test 1', async ({ page, userNameFromEnv }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('menuitem', { name: 'edit Notes' }).click();
    await page.getByText(userNameFromEnv).click();
  });

  test('test 2', async ({ page, companyFromEnv }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('menuitem', { name: 'edit Notes' }).click();
    await page.getByText(companyFromEnv).click();
  });

  test('test 3', async ({ page, useNameFromApi }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('menuitem', { name: 'edit Notes' }).click();
    await page.getByText(useNameFromApi).click();
  });

  test('test 4', async ({ page, companyFromApi }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('menuitem', { name: 'edit Notes' }).click();
    await page.getByText(companyFromApi).click();
  });
});
