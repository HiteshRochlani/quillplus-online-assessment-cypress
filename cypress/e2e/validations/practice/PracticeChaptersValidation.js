import { Utils } from "../../../utils/Utils";
import { PracticeChaptersConstants } from "./constants/PracticeChaptersConstants";

export class PracticeChaptersValidation{
    validateSelectedSubject(selectedSubjectName){
        cy.get(PracticeChaptersConstants.SUBJECT_NAME).invoke("text").should("equal",selectedSubjectName)
    }

    selectRandomChapter(){
        cy.get(PracticeChaptersConstants.CHAPTER_VOLUMES).then((volumes)=>{
            if(volumes.length > 1){
                for(let i=1; i<volumes.length; i++){
                    cy.wrap(volumes).eq(i).click()
                }
            }
        })

        cy.get(PracticeChaptersConstants.CHAPTERS).then((chapters)=>{
            let totalChapters = chapters.length
            let randomNumber = Utils.getRandomInt(0,(totalChapters-1))
            cy.wrap(chapters).eq(randomNumber).click()
        })
    }

    clickOnStartTestButton(){
        cy.get(PracticeChaptersConstants.START_TEST_BUTTON).should("be.enabled").click()
    }

    selectNumberOfQuestionsAndSubmit(){
        let randomNumber = Utils.getRandomInt(0,2)
        cy.get(PracticeChaptersConstants.NUMBER_OF_QUESTIONS_MODAL).should("be.visible")
        cy.get(PracticeChaptersConstants.NUMBER_OF_QUESTIONS_PILLS).eq(randomNumber).click()
        cy.get(PracticeChaptersConstants.SUBMIT_BUTTON).click()
    }
}