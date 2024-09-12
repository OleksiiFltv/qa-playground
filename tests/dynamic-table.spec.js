import { test, expect } from "@playwright/test";
// task Find the Spider-Man in a table that changes the order of rows and assert his real name
test.describe("dynamic table", () => {
  test("check spiderman name", async ({ page }) => {
    const superHeroTitle = page.locator("text=SUPERHERO");
    await page.goto("https://qaplayground.dev/apps/dynamic-table/");
    await expect(superHeroTitle).toBeVisible();

    const spiderManName = "Peter Parker";
    const spiderManRow = page.locator('tr:has-text("Spider-Man")');
    const realNameBlock = spiderManRow.locator("td").nth(2);

    await expect(realNameBlock).toHaveText(spiderManName);
  });

  test("check hulk name", async ({ page }) => {
    const superHeroTitle = page.locator("text=SUPERHERO");
    await page.goto("https://qaplayground.dev/apps/dynamic-table/");
    await expect(superHeroTitle).toBeVisible();

    const hulkName = "Robert Bruce Banner";
    const hulkRow = page.locator('tr:has-text("Hulk")');
    const realNameBlock = hulkRow.locator("td").nth(2);

    await expect(realNameBlock).toHaveText(hulkName);
  });

  test("deadpool name", async ({ page }) => {
    const superHeroTitle = page.locator("text=SUPERHERO");
    await page.goto("https://qaplayground.dev/apps/dynamic-table/");
    await expect(superHeroTitle).toBeVisible();

    const deadpoolName = "Wade Wilson";
    const deadpoolRow = page.locator('tr:has-text("Deadpool")');
    const realNameBlock = deadpoolRow.locator("td").nth(2);

    await expect(realNameBlock).toHaveText(deadpoolName);
  });

  test("Iron man name", async ({ page }) => {
    const superHeroTitle = page.locator("text=SUPERHERO");
    await page.goto("https://qaplayground.dev/apps/dynamic-table/");
    await expect(superHeroTitle).toBeVisible();

    const ironManName = "Anthony 'Tony' Stark";
    const ironManRow = page.locator('tr:has-text("Iron Man")');
    const realNameBlock = ironManRow.locator("td").nth(2);

    await expect(realNameBlock).toHaveText(ironManName);
  });
});
