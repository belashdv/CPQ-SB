import {expect} from '@playwright/test'; 
import {test} from '../BaseTest'
import Log from '../../Data/Utils/Logger'


test.describe('CPQ+SB test', () => {

    test('Final test for CPQ + Subscription billing', async ({cpqPageManager, sbPageManager}) => {
        Log.step('1. Open CPQ and Subscription billing and log into them');
        Log.step('2. Choose "SERVERITY in CPQ" and "Manage Subscription in SB"')
        await cpqPageManager.
        
        await cpqPageManager.page.pause();
        await sbPageManager.page.pause();
    })
})