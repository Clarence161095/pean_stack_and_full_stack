import { test as base } from '@playwright/test';
import { dragDropItemsTest } from '../utils/feature/drag-drop';

const test = base.extend({
  host: async ({}, use) => {
    use('https://material.angular.io/cdk/drag-drop/overview');
  },
});

test.describe('Drag and Drop', () => {
  test.describe('Go to Angular Material Drag and Drop page', () => {
    test.beforeEach(async ({ page, host }) => {
      await page.goto(host);
      await page.locator('#cdk-drag-drop-connected-sorting-group').getByRole('heading', { name: 'To do' }).click();
    });

    test('Item 1 to Item 4', async ({ page, browserName }) => {
      const item1 = 'Get to work';
      const item2 = 'Fall asleep';
      let expectedListAfterDrag = 'Pick up groceries\nGo home\nFall asleep\nGet to work';
      browserName === 'webkit' && (expectedListAfterDrag += '\n');
      await dragDropItemsTest(page, item1, item2, expectedListAfterDrag);
    });

    test('Item 3 to Item 4', async ({ page, browserName }) => {
      const item1 = 'Go home';
      const item2 = 'Fall asleep';
      let expectedListAfterDrag = 'Get to work\nPick up groceries\nFall asleep\nGo home';
      browserName === 'webkit' && (expectedListAfterDrag += '\n');
      await dragDropItemsTest(page, item1, item2, expectedListAfterDrag);
    });

    test('Item 1 to Item 2', async ({ page, browserName }) => {
      const item1 = 'Get to work';
      const item2 = 'Pick up groceries';
      let expectedListAfterDrag = 'Pick up groceries\nGet to work\nGo home\nFall asleep';
      browserName === 'webkit' && (expectedListAfterDrag += '\n');
      await dragDropItemsTest(page, item1, item2, expectedListAfterDrag);
    });

    test('Item 4 to Item 1', async ({ page, browserName }) => {
      const item1 = 'Fall asleep';
      const item2 = 'Get to work';
      let expectedListAfterDrag = 'Fall asleep\nGet to work\nPick up groceries\nGo home';
      browserName === 'webkit' && (expectedListAfterDrag += '\n');
      await dragDropItemsTest(page, item1, item2, expectedListAfterDrag);
    });
  });
});
