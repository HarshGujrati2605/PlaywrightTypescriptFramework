import { expect } from "@playwright/test";
import test from "../../lib/BaseTest";
test.beforeAll(async () => {
});

test.describe('Validate filter tooltip while hovering mouse over filter icon', () => {

    test(`@Smoke Verify User is able to login successfully`, async ({ loginPage,homepage, webActions }) => {
            await loginPage.navigateToURL();
            await loginPage.inputUsername();
            await loginPage.inputPassword();
            await loginPage.clickOnLetsGoButton();
            await loginPage.verifyUserLogo();
            await homepage.hoverOnFilterICon().then(()=>{
                 homepage.validateToolTipPresence();

            })
            
          
        
         
    }); 
        
   

})