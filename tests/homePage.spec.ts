import { test, expect } from "@playwright/test"
import prettier from 'prettier'

async function sanitiseHTML(html: string): Promise<string> {
  const cleaned = html.replace(/_ngcontent-[^=]+="[^"]*"/g, "")
  
  const formatted = await prettier.format(cleaned, {
    parser: 'html', 
    singleAttributePerLine: false
  })
  
  return formatted
}


test("snapshot of top menu", async ({ page }) => {

  await page.goto("https://practicesoftwaretesting.com")
  
  const html = await page.locator("#navbarSupportedContent").innerHTML();
  
  const sanitisedHTML = await sanitiseHTML(html);
  
  expect(sanitisedHTML).toMatchSnapshot("top-menu.html");
})

//navbarSupportedContent
