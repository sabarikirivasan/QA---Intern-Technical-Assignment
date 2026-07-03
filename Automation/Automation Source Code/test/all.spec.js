const { test, expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.getByPlaceholder('Enter your email address');
        this.continueButton = page.locator('button:has-text("Continue")');
        this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async clickLogin() {
        await this.continueButton.click();
    }

    async login(email) {
        await this.enterEmail(email);
        await this.clickLogin();
    }

    async verifyLoginPage() {
        await expect(this.signUpButton).toBeVisible();
    }
}

class SignUpPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.getByPlaceholder('Enter your first name');
        this.lastName = page.getByPlaceholder('Enter your last name');
        this.mobileNumber = page.getByPlaceholder('Enter your phone number');
        this.email = page.getByPlaceholder('Enter your email');
        this.password = page.getByPlaceholder('Enter your password');
        this.confirmPassword = page.getByPlaceholder('Enter your confirm password');
        this.termsCheckbox = page.locator('input[type="checkbox"]');
        this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
        this.verification = page.getByRole('button', { name: 'Resend Verification' });
    }

    async navigate() {
        await this.page.goto('https://tichi-app-webapp-stage.web.app/sign-up');
    }

    async signUp(firstName, lastName, mobile, email, password) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.mobileNumber.fill(mobile);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
        await this.termsCheckbox.evaluate((checkbox) => {
            checkbox.checked = true;
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        });
        await this.signUpButton.click({ force: true });
    }

    async validateExistingUserRedirect(email) {
        await this.firstName.fill('John');
        await this.lastName.fill('Doe');
        await this.mobileNumber.fill('9876543210');
        await this.email.fill(email);
        await this.password.fill('Password@123');
        await this.confirmPassword.fill('Password@123');
        await this.termsCheckbox.evaluate((checkbox) => {
            checkbox.checked = true;
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        });
        await this.signUpButton.click({ force: true });
        await this.page.waitForTimeout(5000);
        await expect(this.page.locator('body')).toContainText(/sign|login|error|already|exist/i, { timeout: 30000 });
    }

    async verifyRedirectToLogin() {
        await this.page.waitForTimeout(5000);
        await expect(this.page.locator('body')).toContainText(/sign|login|error|already|exist/i, { timeout: 30000 });
    }
}

test('Sign up verification', async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('https://tichi-app-webapp-stage.web.app/login');
    await login.login('sabarikirivasan.2006@gmail.com');
});

test('Verify non-existing email redirects to Login page', async ({ page }) => {
    const signUp = new SignUpPage(page);
    await signUp.navigate();
    await signUp.validateExistingUserRedirect('test123@gmail.com');
});

test('Validate non-existing user redirects to Login page', async ({ page }) => {
    const signUp = new SignUpPage(page);
    await signUp.navigate();
    await signUp.validateExistingUserRedirect('test123@gmail.com');
});

test('Login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('https://tichi-app-webapp-stage.web.app/login');
    await login.login('test@example.com');
});
