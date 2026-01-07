import { RegisterValidation } from "../../validations/register/RegisterValidation";
import { LoginValidation } from "../../validations/login/LoginValidation";
import {faker} from "@faker-js/faker";

const login = new LoginValidation()
const register = new RegisterValidation() 

export class RegisterTests{
    loggedInWithRandomNumberAndDefaultOTP(){
        login.visitLoginPage()
        login.enterPhoneNumber(faker.string.numeric(10))
        login.clickOnProceedButton()
        login.enterOtp("131313")
        login.clickOnProceedButton()
    }

    fillRegistrationFormAndClickNext(dataTable){
        const rows = dataTable.raw()
        const tableHeadings = rows[0]

        for(let i=1; i<rows.length; i++){
            register.enterName(rows[i][tableHeadings.indexOf("name")])
            register.enterEmail(rows[i][tableHeadings.indexOf("email")])
            register.selectDOB(rows[i][tableHeadings.indexOf("dob")])
            register.selectGender(rows[i][tableHeadings.indexOf("gender")])
        }
        register.clickOnNextButton()
    }   

}