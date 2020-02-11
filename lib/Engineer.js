const Employee = require("./Employee");


class Engineer extends Employee{

    constructor(id,name,github){
        super(id,name,"Engineer");
        this.github=github;
    }

    getGithub(){
        return this.github;
    }


}

module.exports = Engineer;






