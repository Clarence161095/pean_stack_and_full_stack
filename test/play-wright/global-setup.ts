import { type FullConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

async function globalSetup(config: FullConfig) {
  const environment = process.env.NODE_ENV || 'dev';
  dotenv.config({ path: `.env.${environment}` });

  // const { baseURL, storageState } = config.projects[0].use;
  // const browser = await chromium.launch();
  // const page = await browser.newPage();
  // await page.goto(baseURL!);
  // await page.getByLabel('User Name').fill('user');
  // await page.getByLabel('Password').fill('password');
  // await page.getByText('Sign in').click();
  // await page.context().storageState({ path: storageState as string });
  // await browser.close();
}

export default globalSetup;
