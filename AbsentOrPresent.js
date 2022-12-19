// UC 1- Ability to Check Employee is present or Absent.

const isAbsent=0;
let empCheck=Math.floor(Math.random()*10 )% 2;
console.log(empCheck);
if(empCheck==isAbsent){
    console.log("Employee is Absent.");
    return;
}else{
    console.log("Employee is Present.");
}