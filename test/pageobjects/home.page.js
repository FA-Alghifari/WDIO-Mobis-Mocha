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
}

export default new HomePage();
