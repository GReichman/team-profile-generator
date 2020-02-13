const fs = require("fs");
const util = require("util");
const asyncWrite = util.promisify(fs.writeFile);

const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const pageMaker = require("./page");

const employeeArr = [];
let hasManager=false;


appManager();


async function appManager() {
    let cont = await continueRequest();

    if (cont.continue.toLowerCase() === "y") {
        let info = await requestInfo();
        console.log(info);
        let emp = await createEmployee(info);
        if(emp.title==="Manager" && hasManager==true){
            console.log("Only one manager is allowed");
            appManager();
        }//if trying to add new manager
        else if(emp.title=="Manager"){
            employeeArr.push(emp);
    
            console.log(emp);
            hasManager=true;
            appManager();
        }
        else{
            
            employeeArr.push(emp);
    
            console.log(emp);
            appManager();
        }//else no manager yet

    }//if adding employee
    else if (cont.continue.toLowerCase() === "n") {

        if (employeeArr.length === 0 || hasManager==false) {
            console.log("Page must contain at least a manager");
            appManager();
        }//if no employees
        else{
           const pg =pageMaker.createPage(employeeArr);

           asyncWrite("./output/team.html",pg);
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

async function createEmployee(emp){
    let empObj;
    switch(emp.title){
        case "Manager":
        empObj = await(createManager(emp));
            break;
        case "Engineer":
            empObj = await(createEngineer(emp));

            break;
        case "Intern":
            empObj = await(createIntern(emp));

            break;
    }
    return empObj;
}//createEmployee

async function createManager(emp){
    let office = await requestManager();

    const man = new Manager(emp.name,emp.id,emp.email,office.office);
    return man;

}//createManager

function requestManager(){
    return inquirer.prompt(
        {
            message:"Enter Manager's Office Number",
            name:"office"
        }
    );
}//requestManager

async function createEngineer(emp){
    let github = await requestEngineer();

    const eng = new Engineer(emp.name,emp.id,emp.email,github.github);
    return eng;
}//createEngineer

function requestEngineer(){
    return inquirer.prompt(
        {
            message:"Enter Engineer's Github Username",
            name:"github"
        }
    )
}//requestEngineer

async function createIntern(emp){
    let school = await requestIntern();

    const inter = new Intern(emp.name,emp.id,emp.email,school.school);
    return inter;

}//createIntern

function requestIntern(){
    return inquirer.prompt(
        {
            message:"Enter Which School the Intern Attended",
            name: "school"
        }
    );
}//requestIntern
