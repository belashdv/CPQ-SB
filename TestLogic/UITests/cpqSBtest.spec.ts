import {expect} from '@playwright/test'; 
import {test} from '../BaseTest'
import Log from '../../Data/Utils/Logger'
import { Products, PageName, Customer } from '../../Data/Enums/Data.enum';

test.describe('CPQ+SB test', () => {

    test('Final test for CPQ + Subscription billing', async ({cpqPageManager, sbPageManager}) => {
        Log.step('1. Open CPQ and Subscription billing and log into them');
        Log.step('2. Choose "SERVERITY" in CPQ and "Manage Subscription in SB"')
        await cpqPageManager.categoryDetails.SelectNecessaryCategory('SERVERITY');
        await sbPageManager.homepage.ChooseNecessaryPage(PageName.ManageSubscriptions);
        Log.step('3. Choose "Subscription for Servers" in CPQ and press "Create" button in SB')
        
        await sbPageManager.manageSubscriptions.Buttons.Create.click();
        
        
        await cpqPageManager.page.pause();
        await sbPageManager.page.pause();
    })
})