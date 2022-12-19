

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            console.log("Part Time Employee.");
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            console.log("Full Time Employee.");
            return FULL_TIME_HOURS;
        default:
            console.log("Employee Absent.");
            return 0;
    }
}
const NUM_OF_WORKING_DAYS = 2;

let empHrs = 0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs = empHrs+getWorkingHours(empCheck);
}

let empWage = empHrs*WAGE_PER_HOUR;

console.log("Employee hours: "+empHrs);
console.log("Employee wage: "+empWage)


