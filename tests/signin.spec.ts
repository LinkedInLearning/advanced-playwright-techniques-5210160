import { test, expect } from "@playwright/test"

test("My fragile locator test", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com")
  // await page.click("#navbarSupportedContent > ul > li:nth-child(4) > a");
  await page.getByRole("link", {name: "Sign in"}).click()
  await expect(page).toHaveURL("https://practicesoftwaretesting.com/auth/login")
})
//#navbarSupportedContent > ul > li:nth-child(4) > a
