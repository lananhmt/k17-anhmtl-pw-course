import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Check Title contains text
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click text link
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Check heading
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});