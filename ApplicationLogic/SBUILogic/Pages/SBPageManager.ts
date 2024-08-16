import { Page } from "@playwright/test";
import { SBLoginPage } from "./SBLoginPage"

export class SBPageManager {
    page: Page;
    sbLoginPage;

    constructor(page) {
        this.page = page;
        this.sbLoginPage = new SBLoginPage(page);
    };
};