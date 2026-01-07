const { LoginValidation } = require("../../validations/login/LoginValidation");


const login= new LoginValidation()

export class LoginTests{
    visitLoginPage(){
        login.visitLoginPage()
    }

    performLogin(phoneNumber, otp){
        login.enterPhoneNumber(phoneNumber)
        login.clickOnProceedButton()
        login.enterOtp(otp)
        login.clickOnProceedButton()
    }

    loginWithWrongOTP(phoneNumber){
        login.enterPhoneNumber(phoneNumber)
        login.clickOnProceedButton()
        login.enterOtp("987654")
        login.interceptVerifyOTPRoute()
        login.clickOnProceedButton()
        login.validateWrongOTPModal()
    }
}