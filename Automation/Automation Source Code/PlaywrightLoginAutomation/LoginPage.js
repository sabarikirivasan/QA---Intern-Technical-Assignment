const { expect } = require('@playwright/test');

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

module.exports = LoginPage;