const Employee = require("./Employee");




class Manager extends Employee{
    constructor(name,id,officeNumber){
        super(name,id,"Manager");
        this.officeNumber=officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}



module.exports = Manager;