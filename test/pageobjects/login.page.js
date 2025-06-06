import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//android.widget.AutoCompleteTextView[@resource-id="silktest.insurancemobile:id/email"]');
    }

    get inputPassword () {
        return $('//android.widget.EditText[@resource-id="silktest.insurancemobile:id/password"]');
    }

    get btnSubmit () {
        return $('//android.widget.Button[@resource-id="silktest.insurancemobile:id/log_in_button"]');
    }

    get btnSignUp () {
        return $('//android.widget.ImageButton[@resource-id="silktest.insurancemobile:id/sign_up_fab"]');
    }


    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
