// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  console.log('First 12:20 PM')
  console.log('Second 12:28 PM')

  console.log('Second 12:38 PM')
  console.log('Second 12:50 PM')
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  console.log('Second 12:20 PM')
  console.log('Second 12:28 PM')

  console.log('Second 12:38 PM')
  console.log('Second 12:45 PM')




  console.log('Second 12:50 PM')

  console.log('Second final PM')
});
