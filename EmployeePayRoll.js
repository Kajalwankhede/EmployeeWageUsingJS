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
    
    get id() 
    {

        return this.id;
    }
    set id(id) {
        let idRegex = RegExp('^[1-9]$');
        if(idRegex.test(id)){
             this.id = id;
        }
        else throw 'Id is incorrect, No zero Positive number required';
    }


    get gender() 
    {

        return this.gender;
    }
    set gender(gender) {
        let genderRegex = RegExp('^[M-F]{1}$');
        if(genderRegex.test(gender)) this.gender = gender;
        else throw 'gender is incorrect';
    }


    get email() 
    {

        return this.email;
    }
    set email(email){
        let emailRegex=RegExp("^[a-z0-9+_.-]+@+[a-z]+.+[a-z]")                                                                       
        if(emailRegex.test(email)){
            this.email=email;
        }else
            throw "Incorrect email"; 
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

try{
    employeePayRoll.id=0;
    console.log(employeePayRoll.toString())
}catch(e){
    console.error(e);
} 

try{
    employeePayRoll.gender="M";
    console.log(employeePayRoll.toString())
}catch(e){
    console.error(e);
} 
try{
    employeePayRoll.email="100@.-com"
    console.log(employeePayRoll.toString())
}catch(e){
    console.error(e);
}

let newEmployeePayRoll=new EmployeePayRoll(2,"Terrisa",30000,"F",new Date());
console.log(newEmployeePayRoll.toString());
