import { Page } from "@playwright/test";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { CPQLoginPage } from "../../CPQUILogic/Pages/CPQLoginPage";


export class CPQPageManager {
    page: Page;
    baseApplicationPage;
    cpqLoginPage;

    constructor(page) {
        this.page = page;
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.cpqLoginPage = new CPQLoginPage(page);
    };
};