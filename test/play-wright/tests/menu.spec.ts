import { test, expect, Page } from '@playwright/test';

test.describe('Kiểm tra hoạt động của Menu', () => {
  test.describe('Trường hợp Home Menu', () => {
    // TODO Implement please
  });
  test.describe('Trường hợp Note Menu', () => {
    test.describe('Truy cập vào trang Note', () => {
      test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/note');
      });

      test('Nút Note được hover', async ({ page }: { page: Page }) => {
        const menu = page.getByRole('menuitem', { name: 'edit Note' });
        await menu.click();
        const classList = await menu.getAttribute('class');
        expect(classList).toContain('ant-menu-item-selected');
      });

      test('Title có đúng hay không', async ({ page }: { page: Page }) => {
        await page.getByRole('heading', { name: 'This is Note page' }).click();
      });
    });

    test.describe('Truy cập vào trang không phải là note', () => {
      test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
      });

      test('Nút Note không được hover', async ({ page }: { page: Page }) => {
        const menu = page.getByRole('menuitem', { name: 'edit Note' });
        const classList = await menu.getAttribute('class');
        expect(classList).not.toContain('ant-menu-item-selected');
      });

      test.describe('Click vào nút Note', () => {
        test.beforeEach(async ({ page }) => {
          const menu = page.getByRole('menuitem', { name: 'edit Note' });
          await menu.click();
        });

        test('Chuyển hướng đúng không', async ({ page }: { page: Page }) => {
          const url = page.url();
          expect(url).toContain('note');
        });

        test('Nút Note được hover', async ({ page }: { page: Page }) => {
          const menu = page.getByRole('menuitem', { name: 'edit Note' });
          const classList = await menu.getAttribute('class');
          expect(classList).toContain('ant-menu-item-selected');
        });

        test('Title có đúng hay không', async ({ page }: { page: Page }) => {
          await page.getByRole('heading', { name: 'This is Note page' }).click();
        });
      });
    });
  });
  test.describe('Trường hợp Setting Menu', () => {
    // TODO Implement please
  });
});
