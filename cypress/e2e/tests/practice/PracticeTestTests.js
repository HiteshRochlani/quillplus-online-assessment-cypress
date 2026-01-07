import { PracticeChaptersValidation } from "../../validations/practice/PracticeChaptersValidation";
import { PracticeSubjectsScreenValidation } from "../../validations/practice/PracticeSubjectsScreenValidation";
import { PracticeTestScreenValidation } from "../../validations/practice/PracticeTestScreenValidation";
import { SideBarValidation } from "../../validations/sidebar/SideBarValidation";
import {PracticeTestResultScreenValidation} from "../../validations/practice/PracticeTestResultScreenValidation";

const sidebar = new SideBarValidation()
const practiceSubjectScreen = new PracticeSubjectsScreenValidation()
const practiceChaptersScreen = new PracticeChaptersValidation()
const practiceTestScreen = new PracticeTestScreenValidation()
const practiceResultScreen = new PracticeTestResultScreenValidation()

export class PracticeTestTests{
    openPracticeSection(){
        sidebar.goToPracticeSection()
    }

    selectRandomSubject(){
        practiceSubjectScreen.selectRandomSubject()
    }

    selectRandomChapters(){
        practiceChaptersScreen.validateSelectedSubject(practiceSubjectScreen.getSelectedSubject())
        practiceChaptersScreen.selectRandomChapter()
    }

    selectNumberOfQuestionsAndStartTest(){
        practiceChaptersScreen.clickOnStartTestButton()
        practiceChaptersScreen.selectNumberOfQuestionsAndSubmit()
    }

    attemptTest(){
        practiceTestScreen.attemptTest()
    }

    validateResultPage(){
        practiceTestScreen.waitForTestToGetSubmit().then(() => {
            practiceResultScreen.validateTotalScore(practiceTestScreen.getCorrectAnswerCount(), practiceTestScreen.getTotalQuestions())
            practiceResultScreen.validateAccuracy(practiceTestScreen.getCorrectAnswerCount(), practiceTestScreen.getTotalQuestions())
            practiceResultScreen.validateQuestionWiseBreakDownChart(practiceTestScreen.getCorrectAnswerCount(), practiceTestScreen.getIncorrectAnswerCount(), practiceTestScreen.getTotalQuestions())
            practiceResultScreen.validateTotalTimeChart(practiceTestScreen.getTotalTimeTakenForCorrectQuestions(), practiceTestScreen.getTotalTimeTakenForIncorrectQuestions(), practiceTestScreen.getTotalTimeTaken())
        })
    }
}