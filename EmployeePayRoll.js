class EmployeePayRoll{
   
    id;          //property
    salary;
    gender;
    startDate;

 
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    //getter and setter methods
    get name() 
    {

        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name)) this._name = name;
        else throw 'Name is incorrect';
    }

    toString(){                  
        const options={year:'numeric', month:'long', day:'numeric'};
        const empDate=!this.startDate ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id = "+this.id + " : name = " + this.name+" : salary = " + this.salary+
                " : gender = " + this.gender + " : Start Date = "+empDate;
    }
}

let employeePayRoll = new EmployeePayRoll(1,"Mark",3000);
console.log(employeePayRoll.toString());
try{
    employeePayRoll.name="John";
    process.stdout.write(employeePayRoll.toString());
}catch(exception){
    console.error(exception);
}
let newEmployeePayRoll=new EmployeePayRoll(1,"Terrisa",30000,"Female",new Date());
console.log(newEmployeePayRoll.toString());
