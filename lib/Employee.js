
class Employee{

    constructor(name,id, title){
        this.id = id;
        this.name=name;
        this.title=title;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return `${this.name}@totallyrealemail.com`
    }

    getRole(){
        return this.title;
    }


}


module.exports = Employee;