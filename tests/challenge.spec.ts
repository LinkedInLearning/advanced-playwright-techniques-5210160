import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const text = await page.locator("h1").innerText()

  await expect(text).toBe("Hello, World!");
});
