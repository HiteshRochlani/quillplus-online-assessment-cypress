import { Utils } from "../../../utils/Utils"
import { PracticeSubjectsScreenConstants } from "./constants/PracticeSubjectsScreenConstants"


export class PracticeSubjectsScreenValidation{
    selectedSubject =""

    selectRandomSubject(){
        let randomNumber = Utils.getRandomInt(0,3)
        cy.get(PracticeSubjectsScreenConstants.SUBJECT_CARDS).eq(randomNumber).click().then((subjectCard) =>{
            this.selectedSubject = subjectCard.find("h6").text()
        })
    }

    getSelectedSubject(){
        return this.selectedSubject
    }
}