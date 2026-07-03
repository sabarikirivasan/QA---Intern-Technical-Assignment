const { test } = require('@playwright/test');
const SignUpPage = require('../PlaywrightLoginAutomation/SignUpPage');

test('Verify non-existing email redirects to Login page', async ({ page }) => {

    const signUp = new SignUpPage(page);

    await signUp.navigate();

    await signUp.validateExistingUserRedirect('test123@gmail.com');
});