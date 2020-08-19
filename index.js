// Your code here
function createEmployeeRecord(arr) {
  let obj = {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return obj
}

function createEmployeeRecords(arrayOfArrays) {
  let theArray = [];
  arrayOfArrays.forEach(element => {
    theArray.push(createEmployeeRecord(element))
  });
  return theArray
}
