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


function createEmployeeRecords(arr) {
  return arr.map(array => createEmployeeRecord(array));
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
 function hoursWorkedOnDate(array, date){
   let timeIn = array.timeInEvents.find(daywork => daywork.date === date);
  let timeOut = array.timeOutEvents.find(daywork => daywork.date === date );
  return parseInt((timeOut.hour - timeIn.hour) / 100);
 }
 
 
function wagesEarnedOnDate(array, date){
  return (hoursWorkedOnDate(array, date)*array.payPerHour);
}

function allWagesFor(array){
 let allDates= array.timeInEvents.map(time => time.date);
 return alldates.reduce(function(result,date){
   return result+ wagesEarnedOnDate(array, date);
 },0);
 
}


function calculatePayroll(arr){
//     let sum = arr.map((array) => allWagesFor(array))
//     return array.reduce((num, sum) => num + sum)

  
}

function findEmployeebyFirstName(arr, firstName){
    return arr.find(x => {return x.firstName === firstName})
}
