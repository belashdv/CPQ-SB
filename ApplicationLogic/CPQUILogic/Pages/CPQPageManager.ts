import { Page } from "@playwright/test";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { CPQLoginPage } from "../../CPQUILogic/Pages/CPQLoginPage";
import { CategoriesDetails } from "../Components/Categories/CategoriesDetails";


export class CPQPageManager {
    page: Page;
    baseApplicationPage;
    cpqLoginPage;
    categoryDetails;

    constructor(page) {
        this.page = page;
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.cpqLoginPage = new CPQLoginPage(page);
        this.categoryDetails = new CategoriesDetails(page);
    };
};