import { Page, expect } from '@playwright/test';

export const dragDropItemsTest = async (page: Page, item1: string, item2: string, expectedListAfterDrag: string) => {
  const from = page.locator('#cdk-drop-list-1').getByText(item1);
  const to = page.locator('#cdk-drop-list-1').getByText(item2);
  await from.hover();
  await page.mouse.down();
  await to.hover();
  await to.hover();
  await page.mouse.up();
  await page.mouse.up();
  await from.click();
  const listAfterDrag = await page.locator('#cdk-drop-list-1').innerText();
  expect(listAfterDrag).toBe(expectedListAfterDrag);
};
