export class PracticeTestResultScreenConstants{
 
    static SCORE = "[data-test-id='customized-test-analytics-marks']"
    static ACCURACY = "//h5[normalize-space()='Accuracy']/parent::div/parent::div/div/small/strong"
    static QUESTION_WISE_BREAKDOWN_INCORRECT ="//div[contains(text(),'Question wise breakdown')]/parent::div/parent::div//div[@class='card-body']//div[contains(@class,'apexcharts-canvas')]//div[@seriesname='INCORRECT']"
    static QUESTION_WISE_BREAKDOWN_CORRECT = "//div[contains(text(),'Question wise breakdown')]/parent::div/parent::div//div[@class='card-body']//div[contains(@class,'apexcharts-canvas')]//dIV[@seriesname='CORRECT']"
    static QUESTION_WISE_BREAKDOWN_TOTAL= "//div[contains(text(),'Question wise breakdown')]/parent::div/parent::div//div[@class='card-body']//*[@class='apexcharts-pie']/*[@class='apexcharts-datalabels-group']/*[@class='apexcharts-text apexcharts-datalabel-value']"
    static TIME_CHART = "//div[normalize-space()='Time']/parent::div/parent::div//div[@class='card-body']//*[@class='apexcharts-pie']/*[@class='apexcharts-datalabels-group']/*[@class='apexcharts-text apexcharts-datalabel-value']"
}