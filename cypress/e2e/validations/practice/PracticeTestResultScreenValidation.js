import { PracticeTestResultScreenConstants } from "./constants/PracticeTestResultScreeenConstants";

export class PracticeTestResultScreenValidation{
    validateTotalScore(actualCorrectQuestionCount, actualTotalQuestions){
        cy.get(PracticeTestResultScreenConstants.SCORE).then(($score) => {
            let [extractedMarks, extractedTotalQuestions] = $score.text().split("/")
            expect(parseInt(extractedMarks)).to.be.eq(actualCorrectQuestionCount)
            expect(parseInt(extractedTotalQuestions)).to.be.eq(actualTotalQuestions)
        })
    }

    validateAccuracy(correctAnswerCount, totalQuestions){
        cy.xpath(PracticeTestResultScreenConstants.ACCURACY).then(($accuracy) =>{
            let extractedAccuracy = $accuracy.text().split("%")[0]
            let calculatedAccuracy = ((correctAnswerCount/totalQuestions)*100).toFixed(0)
            expect(extractedAccuracy).to.be.eq(calculatedAccuracy)
        })
    }

    validateQuestionWiseBreakDownChart(actualCorrectQuestionCount, actualIncorrectQuestionCount, actualTotalQuestionsCount){
        cy.xpath(PracticeTestResultScreenConstants.QUESTION_WISE_BREAKDOWN_TOTAL).then(($totalQuestions) =>{
            expect(parseInt($totalQuestions.text())).to.be.eq(actualTotalQuestionsCount)
        })
        
        cy.xpath(PracticeTestResultScreenConstants.QUESTION_WISE_BREAKDOWN_CORRECT).click().then(() =>{
            cy.xpath(PracticeTestResultScreenConstants.QUESTION_WISE_BREAKDOWN_TOTAL).then(($totalCorrectQuestions) =>{
                expect(parseInt($totalCorrectQuestions.text())).to.be.eq(actualCorrectQuestionCount)
            })
        })

        cy.xpath(PracticeTestResultScreenConstants.QUESTION_WISE_BREAKDOWN_INCORRECT).click().then(() =>{
            cy.xpath(PracticeTestResultScreenConstants.QUESTION_WISE_BREAKDOWN_TOTAL).then(($totalIncorrectQuestions) =>{
                expect(parseInt($totalIncorrectQuestions.text())).to.be.eq(actualIncorrectQuestionCount)
            })
        })
    }

    validateTotalTimeChart(actualCorrectQuestionTime, actualIncorrectQuestionTime, actualTotalTimeTaken){
        cy.xpath(PracticeTestResultScreenConstants.TIME_CHART).then(($totalTimeTaken) => {
            this.validateTotalTimeTakenWithOffset(actualTotalTimeTaken, $totalTimeTaken.text(),3)
        })
    }

    validateTotalTimeTakenWithOffset(actualTotalTimeTaken, extractedTotalTimeTaken, offsetValue){
        if(actualTotalTimeTaken.includes(":")){
            let [actualMinutes, actualSeconds] = actualTotalTimeTaken.split(":").map(value => parseInt(value))
            let [extractedMinutes, extractedSeconds] = extractedTotalTimeTaken.replace("m","").replace("s","").split(":").map(value => parseInt(value))

            //actual = 8 extracted = 5
            if(actualSeconds > extractedSeconds){
                expect(extractedSeconds).to.be.greaterThan((actualSeconds-offsetValue))
            }
            else if(actualSeconds < extractedSeconds){
                expect(extractedSeconds).to.be.lessThan((actualSeconds+offsetValue))
            }
            else{
                expect(extractedSeconds).to.be.eq((actualSeconds))
            }
        }else{
            let extractedSeconds = extractedTotalTimeTaken.replace("s","").replace(" ","")
            cy.log(extractedSeconds)
            cy.log(actualTotalTimeTaken)
            if(actualTotalTimeTaken > extractedSeconds){
                expect(parseInt(extractedSeconds)).to.be.greaterThan((parseInt(actualTotalTimeTaken)-offsetValue))
            }
            else if(actualTotalTimeTaken < extractedSeconds){
                expect(parseInt(extractedSeconds)).to.be.lessThan((parseInt(actualTotalTimeTaken)+offsetValue))
            }
            else{
                expect(parseInt(extractedSeconds)).to.be.eq((parseInt(actualTotalTimeTaken)))
            }

        }
    }
}