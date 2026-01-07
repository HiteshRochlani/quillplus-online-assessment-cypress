const { LoginTests } = require("../../tests/login/LoginTests");

const loginTests = new LoginTests()

Given("I visited login page", () =>{
    loginTests.visitLoginPage()
})

Then("I logged in with number {string} and otp {string}",(phoneNumber, otp) => {
    loginTests.performLogin(phoneNumber,otp)
})

Then("I logged in with number {string} and wrong otp", (phoneNumber) =>{
    loginTests.loginWithWrongOTP(phoneNumber)
})