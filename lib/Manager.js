const Employee = require("./Employee");




class Manager extends Employee{
    constructor(id,name,officeNumber){
        super(id,name,"Manager");
        this.officeNumber=officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}



module.exports = Manager;