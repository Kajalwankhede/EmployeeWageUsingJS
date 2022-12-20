class EmployeePayRoll{
   
    id;          //property
    salary;

 
    constructor(id,name,salary){   //constructor
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    //getter and setter methods
    get name() 
    {

        return this._name;
    }
    set name(name) 
    {
        this._name=name;
    }

    toString(){                  
        return "id="+this.id+" : name="+this.name+" : salary="+this.salary;
    }
}

let employeePayRoll = new EmployeePayRoll(1,"Mark",3000);
console.log(employeePayRoll.toString());
employeePayRoll.name="John";
console.log(employeePayRoll.toString());
