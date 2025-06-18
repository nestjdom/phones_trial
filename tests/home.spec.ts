import { texts } from '@/app/phone/(components)/EmptyList';
import { test, expect } from '@playwright/test';
import { homeUrl } from './consts';
import { listLimit } from '@/app/phone/(components)/PhoneList';

test('has everything rendered', async ({ page }) => {
  await page.goto(homeUrl);

  await expect(page.getByRole('navigation')).toBeVisible();
  await expect(page.getByRole('searchbox')).toBeVisible();
  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('listitem')).toHaveCount(listLimit);
});

test('filters based on search params', async ({ page }) => {
  await page.goto(`${homeUrl}/?search=a15`);
  await expect(page.getByRole('listitem')).toHaveCount(1);
});

test('filters based on search term', async ({ page }) => {
  await page.goto(homeUrl);
  await expect(page.getByRole('listitem')).toHaveCount(listLimit);
  
  const searchBox = page.getByRole('searchbox', { name: 'Search for a smartphone...' });
  await searchBox.clear();
  await searchBox.fill('a15');
  
  await expect(page.getByText(/1 RESULTS/i)).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('listitem')).toHaveCount(1, { timeout: 10000 });

  await searchBox.clear();
  await searchBox.fill('nonExistingPhone');
  
  await expect(page.getByRole('listitem')).toHaveCount(0);
  await expect(page.getByText(texts.noResults)).toBeVisible();

  await searchBox.clear();
  await expect(page.getByRole('listitem')).toHaveCount(listLimit);
});
