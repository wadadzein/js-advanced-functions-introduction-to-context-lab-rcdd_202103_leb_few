let createEmployeeRecord=array=>{
  return {
    firstName:array[0],
familyName:array[1],
title:array[2],
payPerHour:array[3],
timeInEvents:[],
timeOutEvents:[]
  }
}


function createEmployeeRecords(employees) {
  return employees.map(employee => createEmployeeRecord(employee));
}

 
 function createTimeInEvent(array,date){
  let dateArray= date.split(' ');
   let timeIn={
     type:"TimeIn",
     hour: parseInt(dateArray[1],10),
     date: dateArray[0]
   };
   array.timeInEvents.push(timeIn);
   return array;
 }

 function createTimeOutEvent(array,date){
  let dateArray= date.split(' ');
   let timeOut={
     type:"TimeOut",
     hour: parseInt(dateArray[1],10),
     date: dateArray[0]
   };
   array.timeOutEvents.push(timeOut);
   return array;
 }

function hoursWorkedOnDate(array,date)
{
  
}