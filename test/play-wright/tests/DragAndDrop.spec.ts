import { test as base, expect } from '@playwright/test';

const test = base.extend({
  host: async ({}, use) => {
    use('https://material.angular.io/cdk/drag-drop/overview');
  },
});

test.describe('Drag and Drop', () => {
  test('Item 1 to Item 4 => all before item go up 1 position', async ({ page, host }) => {
    await page.goto('https://material.angular.io/cdk/drag-drop/overview');
    await page.locator('#cdk-drag-drop-connected-sorting-group').getByRole('heading', { name: 'To do' }).click();

    const listAllItemBeforeDrag = await page.locator('#cdk-drop-list-1').innerText(); // Ex: 'Get to work\nPick up groceries\nGo home\nFall asleep'

    const from = page.locator('#cdk-drop-list-1').getByText('Get to work');
    const to = page.locator('#cdk-drop-list-1').getByText('Fall asleep');
    const { x, y } = (await from.boundingBox()) as any;

    await from.hover();
    await page.mouse.down();
    await page.mouse.move(x + 1, y + 1); // Move a little to trigger drag
    await to.hover();
    await to.hover();
    await page.mouse.up();

    // Create list after drag function
    function calculatorListAfterDrag(listAllItemBeforeDrag: string, from: string, to: string) {
      const listAfterDrag = listAllItemBeforeDrag.split('\n');
      const fromIndex = listAfterDrag.indexOf(from);
      const toIndex = listAfterDrag.indexOf(to);
      listAfterDrag.splice(fromIndex, 1);
      listAfterDrag.splice(toIndex, 0, from);
      return listAfterDrag.join('\n');
    }

    const listAllItemAfterDrag = calculatorListAfterDrag(listAllItemBeforeDrag, 'Get to work', 'Fall asleep');

    await page.waitForTimeout(400); // Wait for animation: https://material.angular.io/cdk/drag-drop/overview transition-duration: 300ms

    const listAfterDrag = await page.locator('#cdk-drop-list-1').innerText();
    expect(listAfterDrag).toBe(listAllItemAfterDrag);
  });
});
