import { LoginConstants } from "./constants/LoginConstants";


export class LoginValidation{
    visitLoginPage(){
        cy.visit(LoginConstants.LOGIN_URL)
    }

    enterPhoneNumber(phoneNumber){
        cy.get(LoginConstants.PHONE_NUMBER_INPUT).type(phoneNumber)
    }

    clickOnProceedButton(){
        cy.contains(LoginConstants.PROCEED_BUTTON_TEXT).click()
    }

    enterOtp(otp){
        cy.get(LoginConstants.OTP_INPUT).type(otp)
    }

    interceptVerifyOTPRoute(){
        cy.intercept("POST","**/users/verify-otp",{
            statusCode: 400,
            body:{
                "message":"Bad request",
                "data":{
                    "error":"Invalid OTP"
                }
            }
        }).as("verifyOTPRequest")
    }

    validateWrongOTPModal(){
        cy.wait("@verifyOTPRequest")
        cy.xpath(LoginConstants.WRONG_OTP_MODAL).should("be.visible")
    }
}