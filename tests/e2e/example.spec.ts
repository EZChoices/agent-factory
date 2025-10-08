import { test, expect } from '@playwright/test';

// Simple Playwright test for homepage

test('homepage loads and has heading', async ({ page }) => {
  await page.goto('/');
  const h1 = page.locator('h1');
  await expect(h1).toBeVisible();
});
