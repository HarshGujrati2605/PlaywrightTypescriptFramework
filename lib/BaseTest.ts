import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pageFactory/LoginPage';
import { WebActions } from './WebActions'; 


const test = baseTest.extend<{
    webActions: WebActions;
    loginPage: LoginPage;
}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    }
})

export default test;