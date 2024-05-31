import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pageFactory/LoginPage';
import { WebActions } from './WebActions'; 
import { HomePage } from '@pages/HomePage';


const test = baseTest.extend<{
    webActions: WebActions;
    loginPage: LoginPage;
    homepage: HomePage;
}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },

    homepage: async({page , context} , use) =>{
       await use(new HomePage(page , context)) ;
    }


})

export default test;