const fs = require("fs");
const util = require("util");
const asyncWrite = util.promisify(fs.writeFile);

const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engingeer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const employeeArr = [];


appManager();


async function appManager() {
    let cont = await continueRequest();

    if (cont.continue.toLowerCase() === "y") {
        let info = await requestInfo();
        console.log(info);
    }//if adding employee
    else if (cont.continue.toLowerCase() === "n") {

        if (employeeArr.length === 0) {
            console.log("Cannot create page with no employees");
            appManager();
        }

    }//else done adding employees

    else {
        console.log("Invalid Input");
        appManager();
    }//else invalid input

}

function continueRequest() {
    return inquirer.prompt(
        {
            message: "Would you like to add an employee? y/n",
            name: "continue"
        }
    )
}

function writeFile() {

}

function requestInfo() {

    return inquirer.prompt([
        {
            message: "Enter Employees Name",
            name:"name"
        },
        {
            message:"Enter Employees ID",
            name: "id"
        },
        {
            message: "Enter Employees Title",
            name: "title",
            type:"list",
            choices: ["Manager","Engineer","Intern"]
        },
        {
            message:"Enter Employee's Email",
            name:"email"
        }
    ]);


}//requestInfo

function createManager(emp){

}

function createEngineer(emp){

}

function createIntern(emp){

}
