import { Utils } from "../../../utils/Utils"
import { PracticeTestScreenConstants } from "./constants/PracticeTestScreenConstants"
import {th} from "@faker-js/faker";
import {DateUtils} from "../../../utils/DateUtils";

export class PracticeTestScreenValidation{
    isCheckForAnswersRouteIntercepted = false
    correctAnswerCount = 0
    incorrectAnswerCount = 0
    totalQuestions =0
    timer = "00:00:00"
    timeTakenForCorrectQuestions = 0
    timeTakenForIncorrectQuestions = 0
    totalTimeTaken = ""

    incrementCorrectAnswerCount(){
        this.correctAnswerCount++
    }
    incrementIncorrectAnswerCount(){
        this.incorrectAnswerCount++
    }

    getIncorrectAnswerCount(){
        return this.incorrectAnswerCount
    }
    getCorrectAnswerCount(){
        return this.correctAnswerCount
    }

    setTotalQuestionsCount(){
        cy.get(PracticeTestScreenConstants.QUESTION_PILLS).then(($questionPills) =>{
            this.totalQuestions = $questionPills.length
        })
    }

    getTotalQuestions(){
        return this.totalQuestions
    }

    getTotalTimeTakenForCorrectQuestions(){
        return this.timeTakenForCorrectQuestions
    }

    getTotalTimeTakenForIncorrectQuestions(){
        return this.timeTakenForIncorrectQuestions
    }

    setTotalTimeTaken(){
        cy.get(PracticeTestScreenConstants.TIMER).then(($timer) => {
            let [hours, minutes, seconds] = $timer.text().split(":")
            if(minutes==="00"){
                this.totalTimeTaken = seconds.replace("/^0+/","")
            }else{
                this.totalTimeTaken = minutes.replace("/^0+/","") + ":" + seconds.replace("/^0+/","")
            }
        })
    }

    getTotalTimeTaken(){
        return this.totalTimeTaken
    }

    selectRandomOption(){
        let randomNumber = Utils.getRandomInt(0,3)
        cy.log(PracticeTestScreenConstants.OPTIONS)
        return cy.get(PracticeTestScreenConstants.OPTIONS).eq(randomNumber).click()
    }

    clickOnSubmitButton(){
        cy.get(PracticeTestScreenConstants.SUBMIT_BUTTON).click()
    }

    clickOnNextButton(){
        cy.get(PracticeTestScreenConstants.NEXT_BUTTON).click()
    }

    validateCorrectIncorrectAnswer(selectedOption){
        cy.wait("@checkForCorrectAnswerRoute").then((xhr)=>{
            if(xhr.response.body.data.was_correct===false){
                cy.wrap(selectedOption).should("have.class",PracticeTestScreenConstants.INCORRECT_ANSWER_CLASS)
                cy.get(PracticeTestScreenConstants.OPTIONS).should("have.class",PracticeTestScreenConstants.CORRECT_ANSWER_CLASS)
                this.incrementIncorrectAnswerCount()
                this.calculateTimeForCorrectAndIncorrectQuestions(false)
            }else{
                cy.wrap(selectedOption).should("have.class",PracticeTestScreenConstants.CORRECT_ANSWER_CLASS)
                this.incrementCorrectAnswerCount()
                this.calculateTimeForCorrectAndIncorrectQuestions(true)
            }
        })
    }

    interceptCheckForCorrectAnswerRoute(){
        cy.intercept("POST",PracticeTestScreenConstants.CHECK_CORRECT_INCORRECT_ANSWER_ROUTE).as("checkForCorrectAnswerRoute")
    }

    clickOnConfirmButton(){
        cy.intercept(PracticeTestScreenConstants.TEST_ROUTE_INTERCEPT).as(PracticeTestScreenConstants.COMPLETE_TEST_ROUTE)
        cy.get(PracticeTestScreenConstants.SUBMIT_TEST_MODAL).should("be.visible")
        cy.get(PracticeTestScreenConstants.CONFIRM_BUTTON).click()
    }

    attemptTest(){
        if(!this.isCheckForAnswersRouteIntercepted){
            this.interceptCheckForCorrectAnswerRoute()
            this.setTotalQuestionsCount()
            this.isCheckForAnswersRouteIntercepted = true
        }
        this.selectRandomOption().then((selectedOption)=>{
            this.validateCorrectIncorrectAnswer(selectedOption)
        })

        cy.get(PracticeTestScreenConstants.BOTTOM_NAV_HOLDER).then((bottomNavHolder)=>{
            if(bottomNavHolder.find(PracticeTestScreenConstants.NEXT_BUTTON).length===0){
                this.clickOnSubmitButton()
                this.clickOnConfirmButton()
                this.setTotalTimeTaken()
            }else{
                this.clickOnNextButton()
                this.attemptTest()
            }
        })
    }

    calculateTimeForCorrectAndIncorrectQuestions(wasCorrect){
        cy.get(PracticeTestScreenConstants.TIMER).then(($timer) =>{
            const lastSavedTime = DateUtils.getConvertedDate(this.timer)
            const currentSavedTime = DateUtils.getConvertedDate($timer.text())

            let differenceInMilliSec = currentSavedTime - lastSavedTime
            let differenceInSeconds = differenceInMilliSec/1000

            this.timer = $timer.text()

            if(wasCorrect){
                this.timeTakenForCorrectQuestions += differenceInSeconds
            }else{
                this.timeTakenForIncorrectQuestions += differenceInSeconds
            }
        })
    }

    waitForTestToGetSubmit(){
        return cy.wait("@completeTestRoute")
    }
}