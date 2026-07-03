const { test } = require('@playwright/test');
const SignUpPage = require('../PlaywrightLoginAutomation/SignUpPage');
const LoginPage = require('../PlaywrightLoginAutomation/LoginPage');

test('Validate non-existing user redirects to Login page', async ({ page }) => {

    const signUp = new SignUpPage(page);

    await signUp.navigate();

    await signUp.validateExistingUserRedirect('test123@gmail.com');
});

test('Login with valid credentials', async ({ page }) => {

    const login = new LoginPage(page);

    await page.goto('https://tichi-app-webapp-stage.web.app/login');

    await login.login(
        'test@example.com',
        'Password123'
    );
});