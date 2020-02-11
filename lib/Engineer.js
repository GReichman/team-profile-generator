const Employee = require("./Employee");


class Engineer extends Employee{

    constructor(name,id,github){
        super(name,id,"Engineer");
        this.github=github;
    }

    getGithub(){
        return this.github;
    }


}

module.exports = Engineer;






