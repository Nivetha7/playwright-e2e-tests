import { test, expect } from "@playwright/test";

test("Should load a page and verify its title", async ({ page }) => {
  // 1. Go to home page
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // 2. verify its title
  await expect(page).toHaveTitle("CURA Healthcare Service");

  // 3. Verify its header text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});
