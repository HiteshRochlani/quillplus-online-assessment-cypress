import { RegisterTests } from "../../tests/register/RegisterTests"

const registerTests = new RegisterTests()

Given("I logged in with random number and default OTP", () =>{
    registerTests.loggedInWithRandomNumberAndDefaultOTP()
})

Then("I filled registration form",(dataTable)=>{
    registerTests.fillRegistrationFormAndClickNext(dataTable)
})