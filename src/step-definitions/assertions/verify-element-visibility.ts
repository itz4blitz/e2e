import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then(
    /^the "([^"]*)" should contain a login button$/,
    async function (elementKey: string) {
        console.log(`the ${elementKey} should contain a login button`);

        const content = await global.page.locator('id=loginBtn');
        await expect(content).toBeVisible();
    }
)
