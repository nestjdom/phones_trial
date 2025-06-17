import { test, expect } from '@playwright/test';
import { homeUrl } from './consts';

test('loads all details of the phone, navbar and a go back button', async ({ page }) => {
  await page.goto(`${homeUrl}/phone/SMG-S24U`);
  await expect(page.getByRole('navigation')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Go back' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Galaxy S24 Ultra' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Galaxy S24 Ultra' })).toBeVisible();
  await expect(page.getByRole('radiogroup', { name: 'Storage: How much space do you need?' })).toBeVisible();
  await expect(page.getByRole('radiogroup', { name: 'Color: Pick your favourite' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
});