import { PracticeTestTests } from "../../tests/practice/PracticeTestTests"

const practiceTestTests = new PracticeTestTests()

Given("Opened practice section",()=>{
    practiceTestTests.openPracticeSection()
})

Then("Selected one subject",()=>{
    practiceTestTests.selectRandomSubject()
})

And("Selected random chapter",()=>{
    practiceTestTests.selectRandomChapters()
})

Then("Selected number of questions and started the test",()=>{
    practiceTestTests.selectNumberOfQuestionsAndStartTest()
})

And("Attempted the test",()=>{
    practiceTestTests.attemptTest()
})

Then("Validate Result Page",() =>{
    practiceTestTests.validateResultPage()
})
