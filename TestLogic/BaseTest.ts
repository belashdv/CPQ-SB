import { test as base, Page } from '@playwright/test'; 
import { CPQPageManager } from '../ApplicationLogic/CPQUILogic/Pages/CPQPageManager';
import { SBPageManager } from '../ApplicationLogic/SBUILogic/Pages/SBPageManager';
import { Credentials, Url } from '../Data/Enums/Data.enum';

export type TestOptions = {
    domain: string
}

export const test = base.extend<TestOptions & {cpqPage: Page, cpqPageManager: CPQPageManager, sbPage: Page, sbPageManager: SBPageManager}> ({
    domain: ['', {option: true}], 

    cpqPage: async ({browser}, use) => {
        const cpqPage = await browser.newPage();
        await cpqPage.goto(Url.CPQUrl);
        await new CPQPageManager(cpqPage).cpqLoginPage.LogIn(Credentials.CPQlogin, Credentials.CPQpassword);
        await use(cpqPage);
    },

    cpqPageManager: async ({cpqPage}, use) => {
        const cpqPageManager = new CPQPageManager(cpqPage); 
        await use(cpqPageManager); 
    }, 

    sbPage: async ({browser}, use) => {
        const sbPage = await browser.newPage();
        await sbPage.goto(Url.SBUrl);
        await new SBPageManager(sbPage).sbLoginPage.LogIn(Credentials.SBlogin, Credentials.SBpassword);
        await use(sbPage);
    },

    sbPageManager: async ({sbPage}, use) => {
        const sbPageManager = new SBPageManager(sbPage); 
        await use(sbPageManager); 
    }, 
}); 

