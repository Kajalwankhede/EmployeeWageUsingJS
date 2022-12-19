

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
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
function calculateDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray=new Array();
while((totalEmpHrs<=MAX_HRS_IN_MONTH) && 
        (totalWorkingDays<NUM_OF_WORKING_DAYS)){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs = totalWorkingDays + empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs));

}

let empWage = calculateDailyWage(totalEmpHrs);
console.log("Employee hours: "+totalEmpHrs);
console.log("Employee wage: "+empWage)
console.log("Daily Wage in Array: "+empDailyWageArray);
console.log("Total working days: "+totalWorkingDays);