const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./cypress/cucumber-json",
    reportPath: "./cypress/cucumber-html",
    metadata: {
        browser: {
            name: "chrome",
            version: "60",
        },
        device: "Local test machine",
        platform: {
            name: "ubuntu",
            version: "16.04",
        },
    },
    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "Custom project" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "B11221.34321" },
            { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
            { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
        ],
    },
});

//const report = require("multiple-cucumber-html-reporter");
// const fs = require('fs');
// const os = require('os');
// const currentTask = process.env.npm_lifecycle_event; //gives the name of the current task (dev or build)
//
// //This function will extract browser details that we have stored in BrowserDetails.json in 'after' hook of cypress in ApplicationHooks.js
// function getBrowserDetails(){
//
//     const extractedStringifyData = fs.readFileSync("./metadata/BrowserDetails.json",'utf-8');
//     const parsedData = JSON.parse(extractedStringifyData);
//     return parsedData;
// }
//
// //This function will return platform details like os name and version using 'os' module of node
// function getPlatformDetails(){
//     let platformDetails = {
//         name: os.type(),
//         version: os.release(),
//     }
//     return platformDetails
// }
// function getPlatformName(){
//     console.log("printing current task")
//     console.log(currentTask)
//     if (currentTask){
//         if (currentTask.includes("cy:run:cloud")){
//             return "Cloud";
//         }else{
//             return "Local Machine";
//         }
//     }else{
//         return "Local Machine"
//     }
// }
//
// function getCurrentDateTime(){
//     const date = new Date();
//     let dateTime = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? 'PM' : 'AM'}`
//     return dateTime;
// }
// const browserData = getBrowserDetails();
// const platformDetails = getPlatformDetails();
// const runMachine = getPlatformName();
// const currentDateTime = getCurrentDateTime();
//
// report.generate({
//     jsonDir: "./cypress/cucumber-json",
//     reportPath: "./cypress/cucumber-html",
//     customMetadata: true,
//     // metadata: {
//     //     browser: {
//     //         name: browserData.name,
//     //         version: browserData.version,
//     //     },
//     //     device:runMachine,
//     //     platform: {
//     //         name: platformDetails.name,
//     //         version: platformDetails.version,
//     //     },
//     //
//     // },
//     metadata: [
//         {
//             "name":"browser",
//             "value": browserData.name
//         },
//         {
//             "name": "device",
//             "value": runMachine
//         },
//         {
//             "name": "platform",
//             "value": platformDetails.name
//         },
//         {
//             "name": "timestamp",
//             "value": currentDateTime
//         }
//     ]
//     // customData: {
//     //     title: "Run info",
//     //     data: [
//     //         { label: "Project", value: "Custom project" },
//     //         { label: "Release", value: "1.2.3" },
//     //         { label: "Cycle", value: "B11221.34321" },
//     //         { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
//     //         { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
//     //     ],
//     // },
// });