import { SideBarConstants } from "./constants/SideBarConstants";

export class SideBarValidation{
    goToPracticeSection(){
        cy.get(SideBarConstants.PRACTICE_LINK).click()
    }
}