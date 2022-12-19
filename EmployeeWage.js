

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
console.log("---------------------------------------------------------------");

//Array Helper Function
//UC 7A calc total wage using array forach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage = totEmpWage + dailyWage;
}

empDailyWageArray.forEach(sum);
console.log("Total Days: "+totalWorkingDays);
console.log("Total hrs: "+totalEmpHrs);
console.log("Total Emp Wage: "+totEmpWage);

function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}

console.log(" UC 7A -- Employee Wage with reduce: "+empDailyWageArray.reduce(totalWages,0));
console.log("---------------------------------------------------------------");


//UC 7B
let dailyCntr =0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr +" = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
console.log("UC 7B -- Daily Wage Map:");
console.log(mapDayWithWageArr);
console.log("---------------------------------------------------------------");

//UC 7C
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC 7C -- Days With Full Time Wage Earned Using Filter:");
console.log(fullDayWageArr);
console.log("---------------------------------------------------------------");


//UC 7D
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7D -- First time Full Time Wage earned on day: "+
    mapDayWithWageArr.find(findFullTimeWage));

    console.log("---------------------------------------------------------------");


//UC 7E
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7E -- Check all Element have Full Time Wage: "+
    fullDayWageArr.every(findFullTimeWage));
    console.log("---------------------------------------------------------------");


//UC 7F

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}

console.log("UC 7F -- Check if any have Part Time Wage: "+
    mapDayWithWageArr.some(isAnyPartTimeWage));
    console.log("---------------------------------------------------------------");


//UC 7G
function totalDaysWorked(noOfDays,dailyWage){
    if(dailyWage>0) return noOfDays+1;
    return noOfDays;
}
console.log("UC 7G -- Number of Days Employee Worked: "+
    empDailyWageArray.reduce(totalDaysWorked,0));
    console.log("---------------------------------------------------------------");
