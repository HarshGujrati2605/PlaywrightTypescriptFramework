import test from "../../lib/BaseTest";
test.beforeAll(async () => {
});

test.describe('Validate different filter options and functionality', () => {

    test(`@Smoke Verify User is able to login successfully`, async ({ loginPage,homepage, webActions }) => {
            await loginPage.navigateToURL();
            await loginPage.inputUsername();
            await loginPage.inputPassword();
            await loginPage.clickOnLetsGoButton();
            await loginPage.verifyUserLogo();
            await homepage.hoverOnFilterICon()
    }); 
        
   

})