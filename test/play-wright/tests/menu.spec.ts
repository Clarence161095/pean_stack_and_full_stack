import { test, expect, Page } from '@playwright/test';

test.describe('Kiểm tra hoạt động của Menu', () => {
  test.describe('Trường hợp Home Menu', () => {
    test.describe('Truy cập vào trang Home Page', () => {
      test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
      });

      test('Nút Home được active', async ({ page }: { page: Page }) => {
        const menu = page.getByRole('menuitem', { name: 'home Home' });
        const classList = await menu.getAttribute('class');
        expect(classList).toContain('ant-menu-item-selected');
      });

      test('Title có đúng hay không', async ({ page }: { page: Page }) => {
        await page.getByRole('heading', { name: 'This is Home page' }).click();
      });

      test.describe('Truy cập vào trang Note', () => {
        test.beforeEach(async ({ page }) => {
          await page.goto('http://localhost:5173/note');
        });

        test('Nút Home không được active', async ({ page }: { page: Page }) => {
          const menu = page.getByRole('menuitem', { name: 'home Home' });
          const classList = await menu.getAttribute('class');
          expect(classList).not.toContain('ant-menu-item-selected');
        });

        test.describe('Click vào nút Home', () => {
          test.beforeEach(async ({ page }) => {
            await page.getByRole('menuitem', { name: 'home Home' }).click();
          });

          test('Chuyển hướng đúng không', async ({ page }: { page: Page }) => {
            const url = page.url();
            expect(url).toBe('http://localhost:5173/home');
          });

          test('Nút Home được active', async ({ page }: { page: Page }) => {
            const menu = page.getByRole('menuitem', { name: 'home Home' });
            const classList = await menu.getAttribute('class');
            expect(classList).toContain('ant-menu-item-selected');
          });

          test('Title có đúng hay không', async ({ page }: { page: Page }) => {
            await page.getByRole('heading', { name: 'This is Home page' }).click();
          });
        });
      });
    });
  });

  test.describe('Trường hợp Note Menu', () => {
    test.describe('Truy cập vào trang Note', () => {
      test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/note');
      });

      test('Nút Note được active', async ({ page }: { page: Page }) => {
        const menu = page.getByRole('menuitem', { name: 'edit Note' });
        await menu.click();
        const classList = await menu.getAttribute('class');
        expect(classList).toContain('ant-menu-item-selected');
      });

      test('Title có đúng hay không', async ({ page }: { page: Page }) => {
        await page.getByRole('heading', { name: 'This is Note page' }).click();
      });
    });

    test.describe('Truy cập vào trang Home Page', () => {
      test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
      });

      test('Nút Note không được active', async ({ page }: { page: Page }) => {
        const menu = page.getByRole('menuitem', { name: 'edit Note' });
        const classList = await menu.getAttribute('class');
        expect(classList).not.toContain('ant-menu-item-selected');
      });

      test.describe('Click vào nút Note', () => {
        test.beforeEach(async ({ page }) => {
          await page.getByRole('menuitem', { name: 'edit Note' }).click();
        });

        test('Chuyển hướng đúng không', async ({ page }: { page: Page }) => {
          const url = page.url();
          expect(url).toBe('http://localhost:5173/note');
        });

        test('Nút Note được active', async ({ page }: { page: Page }) => {
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
    test.describe('Trường hợp Profile Menu', () => {
      test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/settings/profile');
      });

      test('Nút Setting Profile được active', async ({ page }: { page: Page }) => {
        const menu = page.getByRole('menuitem', { name: 'profile Profile' });
        const classList = await menu.getAttribute('class');
        expect(classList).toContain('ant-menu-item-selected');
      });

      test('Title có đúng hay không', async ({ page }: { page: Page }) => {
        await page.getByRole('heading', { name: 'This is Profile page' }).click();
      });

      test.describe('Truy cập vào trang Home Page', () => {
        test.beforeEach(async ({ page }) => {
          await page.goto('http://localhost:5173');
        });

        test.describe('Click vào nút Setting', () => {
          test.beforeEach(async ({ page }) => {
            await page.getByRole('menuitem', { name: 'setting Settings' }).click();
          });

          test('Nút Setting Profile không được active', async ({ page }: { page: Page }) => {
            const menu = page.getByRole('menuitem', { name: 'profile Profile' });
            const classList = await menu.getAttribute('class');
            expect(classList).not.toContain('ant-menu-item-selected');
          });

          test.describe('Click vào nút Profile', () => {
            test.beforeEach(async ({ page }) => {
              await page.getByRole('menuitem', { name: 'profile Profile' }).click();
            });

            test('Chuyển hướng đúng không', async ({ page }: { page: Page }) => {
              const url = page.url();
              expect(url).toBe('http://localhost:5173/settings/profile');
            });

            test('Nút Setting Profile được active', async ({ page }: { page: Page }) => {
              const menu = page.getByRole('menuitem', { name: 'profile Profile' });
              const classList = await menu.getAttribute('class');
              expect(classList).toContain('ant-menu-item-selected');
            });

            test('Title có đúng hay không', async ({ page }: { page: Page }) => {
              await page.getByRole('heading', { name: 'This is Profile page' }).click();
            });
          });
        });
      });
    });

    test.describe('Trường hợp Layout Menu', () => {
      test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/settings/layout');
      });

      test('Nút Setting Layout được active', async ({ page }: { page: Page }) => {
        const menu = page.getByRole('menuitem', { name: 'layout Layout' });
        const classList = await menu.getAttribute('class');
        expect(classList).toContain('ant-menu-item-selected');
      });

      test('Title có đúng hay không', async ({ page }: { page: Page }) => {
        await page.getByRole('heading', { name: 'This is Layout page' }).click();
      });

      test.describe('Truy cập vào trang Home Page', () => {
        test.beforeEach(async ({ page }) => {
          await page.goto('http://localhost:5173');
        });

        test.describe('Click vào nút Setting', () => {
          test.beforeEach(async ({ page }) => {
            await page.getByRole('menuitem', { name: 'setting Settings' }).click();
          });

          test('Nút Setting Layout không được active', async ({ page }: { page: Page }) => {
            const menu = page.getByRole('menuitem', { name: 'layout Layout' });
            const classList = await menu.getAttribute('class');
            expect(classList).not.toContain('ant-menu-item-selected');
          });

          test.describe('Click vào nút Layout', () => {
            test.beforeEach(async ({ page }) => {
              await page.getByRole('menuitem', { name: 'layout Layout' }).click();
            });

            test('Chuyển hướng đúng không', async ({ page }: { page: Page }) => {
              const url = page.url();
              expect(url).toBe('http://localhost:5173/settings/layout');
            });

            test('Nút Setting Layout được active', async ({ page }: { page: Page }) => {
              const menu = page.getByRole('menuitem', { name: 'layout Layout' });
              const classList = await menu.getAttribute('class');
              expect(classList).toContain('ant-menu-item-selected');
            });

            test('Title có đúng hay không', async ({ page }: { page: Page }) => {
              await page.getByRole('heading', { name: 'This is Layout page' }).click();
            });
          });
        });
      });
    });
  });
});
