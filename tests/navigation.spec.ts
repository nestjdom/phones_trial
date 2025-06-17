import { test, expect } from '@playwright/test';
import { homeUrl } from './consts';

test('navigates to the phone detail page and back', async ({ page }) => {
  await page.goto(homeUrl);
  await expect(page.getByRole('navigation')).toBeVisible();

  await page.getByRole('link', { name: 'Galaxy S24 Ultra Samsung' }).click();
  await expect(page.getByRole('button', { name: 'Go back' })).toBeVisible();
  await page.getByRole('button', { name: 'Go back' }).click();

  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('listitem')).toHaveCount(24);
});

