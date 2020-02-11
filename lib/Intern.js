const Employee = require("./Employee");



class Intern extends Employee{

    constructor(id,name,school){
        super(id,name,"Intern");
        this.school=school;
    }

    getSchool(){
        return this.school;
    }

}



module.exports = Intern;