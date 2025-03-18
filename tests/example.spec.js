// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

 console.log("this is final Action form our side -> Script First");
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log("this is final Action form our side -> Script Second");
   console.log("master branch");
   console.log("master branch -2");
});
