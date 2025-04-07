import { test, expect } from "@playwright/test";

test("Slow test challenge – Can you optimise this?", async ({ page }) => {
	// 🔴 Hardcoded wait slows down test startup unnecessarily.
	// 📚 (See Chapter 1 Video 2 – Diagnosing Performance Bottlenecks)
	await page.waitForTimeout(5000);

	// 🔴 Navigating *after* the wait – order doesn't make sense.
	await page.goto("https://practicesoftwaretesting.com");

	// 🔴 Redundant wait for the same selector that will be used immediately after.
	await page.waitForTimeout(3000); // 📚 (Chapter 1 Video 2)

	// 🔴 Inefficient use of waitForSelector with a duplicated locator call.
	// 📚 (Chapter 1 Video 4 – Project Dependency Setup)
	await page.waitForSelector('a[data-test="nav-sign-in"]');

	// 🔴 Using a separate locator variable for a simple click (unnecessary in this case).
	const signInLink = await page.locator('a[data-test="nav-sign-in"]');
	await signInLink.click();

	// 🔴 Artificial loop causing 5 seconds of delay.
	// 📚 (Chapter 1 Video 1 – Green Testing & Efficiency)
	for (let i = 0; i < 5; i++) {
		await page.waitForTimeout(3000);
	}

	await page.waitForLoadState("domcontentloaded")

	// 🔴 Strict string match instead of a flexible URL regex.
	// 📚 (Chapter 1 Video 6 – Challenge on Optimisation)
	await expect(page).toHaveURL(
		"https://practicesoftwaretesting.com/auth/login"
	);

	// 🔴 Final unnecessary delay bloats test time even further.
	await page.waitForTimeout(3000); // 📚 (Chapter 1 Video 5 – Parallelisation Advice)
});
