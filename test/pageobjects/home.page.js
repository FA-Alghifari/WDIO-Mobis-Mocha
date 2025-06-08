import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get getLoggedInName () {
        return $('//android.widget.TextView[@resource-id="silktest.insurancemobile:id/logged_in_as"]');
    }
    get getMenuButton () {
        return $('//android.widget.ImageButton[@content-desc="drawer_open"]');
    }
    get getLogoutButton () {
        return $('//android.widget.TextView[@resource-id="silktest.insurancemobile:id/menu_list_item_text" and @text="LOGOUT"]');
    }    
    async logout () {
        await this.getMenuButton.click();
        await this.getLogoutButton.click();
    }    
}

export default new HomePage();
