import { Page } from "@playwright/test";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { CPQLoginPage } from "../../CPQUILogic/Pages/CPQLoginPage";
import { CategoriesDetails } from "../Components/Categories/CategoriesDetails";
import { MainCatalog } from "../Components/Home/MainCatalog";
import { Product } from "../Components/Configurator/Products/Product";
import { ConfiguratorCommon } from "../Components/Configurator/ConfiguratorCommon"
import { QuoteInfo } from "../Components/Quote/HomeCart/QuoteInfo"


export class CPQPageManager {
    page: Page;
    baseApplicationPage;
    cpqLoginPage;
    categoryDetails;
    mainCatalog;
    product;
    configuratorCommon;
    quoteInfo;

    constructor(page) {
        this.page = page;
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.cpqLoginPage = new CPQLoginPage(page);
        this.categoryDetails = new CategoriesDetails(page);
        this.mainCatalog = new MainCatalog(page);
        this.product = new Product(page);
        this.configuratorCommon = new ConfiguratorCommon(page);
        this.quoteInfo = new QuoteInfo(page);
    };
};