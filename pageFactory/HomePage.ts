import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from '../lib/WebActions';
import { testConfig } from '../testConfig';
import { error } from 'console';
let webActions: WebActions;

export class HomePage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly FILTER_ICON: Locator;
    readonly FILTER_TOOLTIP :Locator;
    


    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.FILTER_ICON = page.locator('.documents-filters p');
        this.FILTER_TOOLTIP = page.locator("//div[contains(@aria-describedby, 'tooltip')]");
       
    }


    async hoverOnFilterICon(){

        await this.FILTER_ICON.hover();
    }

    async validateToolTipPresence() {
    
      await expect(this.FILTER_TOOLTIP).toBeVisible();
    }

    }



