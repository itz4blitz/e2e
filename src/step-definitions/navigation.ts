import { Given } from '@cucumber/cucumber';

Given(
    /^I am on the login page$/,
    async function () {
        console.log("I am on the login page");

        await global.page.goto("https://demo.snapnursebooker.com/")
    }
)