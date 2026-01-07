export class RegisterConstants{
    static NAME_INPUT = "//input[@id='name']"
    static EMAIL_INPUT = "//input[@id='email']"
    static CALENDAR_YEAR_INPUT = "//div[contains(@class,'flatpickr-calendar')]//div[@class='numInputWrapper']/input"
    static CALENDAR_MONTH_SELECT = "//div[contains(@class,'flatpickr-calendar')]//div[@class='flatpickr-current-month']/select"
    static CALENDAR_DATE_SELECT = "//div[contains(@class,'flatpickr-calendar')]//div[@class='dayContainer']/span[normalize-space()='dateToReplace'][@class='flatpickr-day']"
    static DOB_COMPONENT = "//input[@id='date_of_birth']"
    static GENDER_INPUT = "//label[normalize-space()='Gender']/parent::div/div/div"
    static NEXT_BUTTON = "//span[contains(text(),'Next')]"
}