import { Page } from "@playwright/test";
import { SBLoginPage } from "./SBLoginPage";
import { Homepage } from "./Homepage";
import { ManageSubscriptions } from "../Components/ManageSubscriptions";
import { Subscription } from "../Components/Subscription2";

export class SBPageManager {
    page: Page;
    sbLoginPage;
    homepage;
    manageSubscriptions;
    subscription;

    constructor(page) {
        this.page = page;
        this.sbLoginPage = new SBLoginPage(page);
        this.homepage = new Homepage(page);
        this.manageSubscriptions = new ManageSubscriptions(page);
        this.subscription = new Subscription(page);
    };
};