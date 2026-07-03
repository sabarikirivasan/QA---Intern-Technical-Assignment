const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  page.on('console', msg => console.log('console:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('pageerror:', err.message));
  await page.goto('https://tichi-app-webapp-stage.web.app/sign-up', { waitUntil: 'domcontentloaded' });
  console.log('initial url', page.url());
  await page.getByPlaceholder('Enter your first name').fill('John');
  await page.getByPlaceholder('Enter your last name').fill('Doe');
  await page.getByPlaceholder('Enter your phone number').fill('9876543210');
  await page.getByPlaceholder('Enter your email').fill('test123@gmail.com');
  await page.getByPlaceholder('Enter your password').fill('Password@123');
  await page.getByPlaceholder('Enter your confirm password').fill('Password@123');
  await page.locator('input[type="checkbox"]').check();
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.waitForTimeout(10000);
  console.log('after click url', page.url());
  console.log('body text snippet', (await page.locator('body').innerText()).slice(0, 4000));
  await browser.close();
})();
