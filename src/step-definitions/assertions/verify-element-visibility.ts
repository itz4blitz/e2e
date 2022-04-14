import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then(
    /^the "([^"]*)" should contain a login button$/,
    async function (elementKey: string) {
        const {
            screen: { page }
        } = this;

        console.log(`the ${elementKey} should contain a login button`);

        const content = await page.locator('id=loginBtn');
        await expect(content).toBeVisible();
    }
)

Then(
    /^the "([^"]*)" should be displayed$/,
    async function(elementKey: string) {
        const {
            screen: { page }
        } = this;

        console.log(`the ${elementKey} should be displayed`);

        const locator = page.locator("[class='header-logo']");
        await expect(locator).toBeVisible();
    }
)