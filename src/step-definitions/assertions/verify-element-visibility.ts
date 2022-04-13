import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then(
    /^the login form should contain the text Demo SnapNurse$/,
    async function () {
        console.log("the login form should contain the text Demo SnapNurse");

        const content = await global.page.textContent("[page-header]");
        expect(content).toBe("Demo SnapNurse");
    }
)
