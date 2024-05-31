import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from '../lib/WebActions';
import { testConfig } from '../testConfig';
let webActions: WebActions;

export class HomePage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly FILTER_ICON: Locator;
    


    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.FILTER_ICON = page.locator('.documents-filters p');
       
    }


    async hoverOnFilterICon(){

        await this.FILTER_ICON.hover();
    }

    }



