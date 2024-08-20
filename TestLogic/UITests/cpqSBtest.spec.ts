import {expect} from '@playwright/test'; 
import {test} from '../BaseTest'
import Log from '../../Data/Utils/Logger'
import { Products, PageName, Customer, SubscriptionDuration, SubscriptionBillingCycle, DropDownStatus } from '../../Data/Enums/Data.enum';

test.describe('CPQ+SB test', () => {

    test('Final test for CPQ + Subscription billing', async ({cpqPageManager, sbPageManager}) => {
        Log.step('1. Open CPQ and Subscription billing and log into them');
        
        Log.step('2. Choose "iTunes-> Apple TV" in CPQ and "Manage Subscription in SB"');
        await cpqPageManager.categoryDetails.SelectNecessarySubCategory('iTunes Store', 'Apple TV');
        
        await sbPageManager.homepage.ChooseNecessaryPage(PageName.ManageSubscriptions);
        
        Log.step('3. Choose "Apple TV+" in CPQ and press "Create" button in SB');
        await cpqPageManager.mainCatalog.ProductCard.Buttons.Configure.first().click();
        
        await sbPageManager.manageSubscriptions.Buttons.Create.click();
        
        Log.step('4. Choose "Subscription duration" and "Subscription cycle" in CPQ and fill mandatory fields in SB');
        await cpqPageManager.product.ChooseAttributes.Attribute(SubscriptionDuration.HALFAYEAR);
        await cpqPageManager.product.ChooseAttributes.Attribute(SubscriptionBillingCycle.MONTH);
        
        await sbPageManager.manageSubscriptions.ChooseCustomer(Customer.anyCustomer);
        await sbPageManager.manageSubscriptions.ChooseProduct(Products.anyProduct);
        await sbPageManager.manageSubscriptions.ChooseFixedTerm("48");

        Log.step('5. Press "Add to quote" in CPQ and "Continue" in SB');
        await cpqPageManager.configuratorCommon.Buttons.AddToQuote.click();

        await sbPageManager.manageSubscriptions.CreateSubscriptionElementsButtons.Continue.click();

        Log.step('6. Change quote status to "VN preparing" in CPQ and complete creation of new subscription in SB');
        await cpqPageManager.quoteInfo.DropDowns.Status.selectOption(DropDownStatus.VNPreparing);

        await sbPageManager.subscription.FillMandatoryFields(14, 7, 12);
        await sbPageManager.subscription.Buttons.Create.click();

        await cpqPageManager.page.pause();
        await sbPageManager.page.pause();
    })
})