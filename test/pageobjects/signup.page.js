import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage {
    /**
     * define selectors using getter methods
     */
    get inputFirstName () {
        return $('//android.widget.EditText[@resource-id="silktest.insurancemobile:id/firstName"]');
    }

    get inputLastName () {
        return $('//android.widget.EditText[@resource-id="silktest.insurancemobile:id/lastName"]');
    }

    get inputBirthDay() {
        return $('//android.widget.EditText[@resource-id="silktest.insurancemobile:id/birthday"]');
    }
    get inputEmail() {
        return $('//android.widget.EditText[@resource-id="silktest.insurancemobile:id/email"]');
    }
    get inputPassword() {
        return $('//android.widget.EditText[@resource-id="silktest.insurancemobile:id/password"]');
    }
    get btnSignUp() {
        return $('//android.widget.Button[@resource-id="silktest.insurancemobile:id/sign_up_button"]');
    }
    
    get txtSnackBar() {
        return $('//android.widget.TextView[@resource-id="silktest.insurancemobile:id/snackbar_text"]');
    }


        async signup (firstName, lastName, birthDay,email,password) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputBirthDay.clearValue();
        await this.inputBirthDay.setValue(birthDay);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignUp.click();
    }
}

export default new SignUpPage();
