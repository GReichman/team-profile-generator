const Employee = require("./Employee");


class Engineer extends Employee{

    constructor(name,id,title,github){
        super(id,name,title);
        this.github=github;
    }

    getGithub(){
        return this.github;
    }


}

module.exports = Engineer;






