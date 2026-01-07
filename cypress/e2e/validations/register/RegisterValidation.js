import { RegisterConstants } from "./constants/RegisterConstants";
import {faker} from "@faker-js/faker"

export class RegisterValidation{
    enterName(name){
        cy.xpath(RegisterConstants.NAME_INPUT).type(name)
    }

    enterEmail(email){
        if(email==="random"){
            cy.xpath(RegisterConstants.EMAIL_INPUT).type(faker.internet.email())
        }else{
            cy.xpath(RegisterConstants.EMAIL_INPUT).type(email)
        }


    }

    selectDOB(dob){
        const [year,month,date] = dob.split("-")
        cy.xpath(RegisterConstants.DOB_COMPONENT).click()
        cy.xpath(RegisterConstants.CALENDAR_YEAR_INPUT).type(year)
        cy.xpath(RegisterConstants.CALENDAR_MONTH_SELECT).select((month)-1)
        cy.xpath(RegisterConstants.CALENDAR_DATE_SELECT.replace("dateToReplace",date)).click()
    }

    selectGender(gender){
        cy.xpath(RegisterConstants.GENDER_INPUT).trigger("mousedown").type(gender+"{enter}")
    }

    clickOnNextButton(){
        cy.xpath(RegisterConstants.NEXT_BUTTON).click()
    }

}