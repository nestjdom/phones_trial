import { test, expect } from '@playwright/test';

const homeUrl = 'http://localhost:3000';

test('has everything rendered', async ({ page }) => {
  await page.goto(homeUrl);

  await expect(page.getByRole('navigation')).toBeVisible();
  await expect(page.getByRole('searchbox')).toBeVisible();
  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('listitem')).toHaveCount(24);
});

test('filters based on search params', async ({ page }) => {
  await page.goto(homeUrl);

  await page.getByRole('searchbox').fill('a15');

  await expect(page.getByRole('listitem')).toHaveCount(1);
});
