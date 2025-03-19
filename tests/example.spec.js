// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

console.log("Ajit From Odisha And GitAction Process is done with Script First")

console.log("Ajit From Odisha And GitAction Process is done with Script First Checking again")
console.log("Ajit From Odisha And GitAction Process is done with Script Second Checking again for email")
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  console.log("Ajit From Odisha And GitAction Process is done with Script Second ")
  console.log("Ajit From Odisha And GitAction Process is done with Script Second Checking again")
  console.log("Ajit From Odisha And GitAction Process is done with Script Second Checking again for mail")
  
});



// name: hello-world
// on: push
// jobs:
//   my-job:
//     runs-on: macos-latest
//     steps:
//       - name: Checkout repository
//         uses: actions/checkout@v3

//       - name: Setup Node.js
//         uses: actions/setup-node@v3
//         with:
//           node-version: 18

//       - name: Install dependencies
//         run: npm install

//       - name: Install Playwright Browsers
//         run: npx playwright install --with-deps

//       - name: Run Playwright tests
//         run: npx playwright test example.spec.js --workers=1 --project=chromium --reporter=dot
