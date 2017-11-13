var employeeCounter = 0;

$(document).ready(readyNow);//calls readyNow function on html open

function readyNow(){
    $('button').on('click', newEmployee);//runs newEmployee function on button click

}



function newEmployee(){
employeeCounter++;

var employeeFirstNameIn = $('#employeeFirstNameInput').val(); // gets button to select input
console.log(employeeFirstNameIn);//logs the thing you put the input


$('#employeeFirstNameInput').val('');//resets input

var employeeLastNameIn = $('#employeeLastNameInput').val(); //grab last name
console.log(employeeLastNameIn);

$('#employeeLastNameInput').val('');//resets input

var employeeIdIn= $('#employeeIdInput').val();//grab ID
console.log(employeeIdIn);

$('#employeeIdInput').val('');//reset Id input

var employeeTitleIn = $('#employeeTitleInput').val();//grab title
console.log(employeeTitleIn);
$('#employeeTitleInput').val('');//reset title input

var employeeSalaryIn = $('#employeeSalaryInput').val();
console.log(employeeSalaryIn);
salaryArray.push(employeeSalaryIn);

$('#employeeSalaryInput').val('');//rest salary in

}

var salaryArray = [];
function pushSalaray(){
var employeeSalaryInput = document.getElementById('employeeSalaryInput').value;

salaryArray.push(employeeSalaryInput);

var salary = "";
for(i=0; i<salaryArray.length; i++){
salary = salary + salaryArray[i];
}//for loop end
document.getElementById("employeeSalaryInput").innerHTML = salary;
}//pushSalary end


console.log(salaryArray);