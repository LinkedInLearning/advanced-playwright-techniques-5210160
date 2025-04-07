import { test, expect } from "@playwright/test";

test("signin link is correct", async ({ page }) => {

	await page.goto("https://practicesoftwaretesting.com");

	await page.locator('a[data-test="nav-sign-in"]').click()

	await expect(page).toHaveURL(
		"https://practicesoftwaretesting.com/auth/login"
	);
});
