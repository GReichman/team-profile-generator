function createPage(emps){
    let employeeSection="";
emps.forEach(element => {
    let ePanel="";
    switch(element.title){
        case "Manager":
            ePanel = createManagerPanel(element);
            break;
        case "Engineer":
            ePanel=createEngineerPanel(element);
            break;
        case "Intern":
            ePanel = createInternPanel(element);
            break;
    }//switch
    employeeSection+=ePanel;
});//for each employee
}

function createEngineerPanel(eng){

}//engineerPanel

function createManagerPanel(man){

}//managerPanel

function createInternPanel(inter){

}//internPanel

module.exports = createPage(emps);