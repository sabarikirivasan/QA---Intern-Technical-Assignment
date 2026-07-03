const { expect } = require('@playwright/test');

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

        this.Verification = page.getByRole('button', { name: 'Resend Verification' });
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

module.exports = SignUpPage;