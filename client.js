$(document).ready(function(){
  //create global array to store employee objects
  var employeeArray = [];

  //update employee table
  var updateTable = function(){
    var tbody = $('tbody');
    tbody.empty(); //clear out tablebody
    //iterate over employees and create table row for each element in array
    for (var i = 0; i < employeeArray.length; i++) {
      var oneEmployee = employeeArray[i];
      tbody.append('<tr><td>'+ oneEmployee.firstName + '</td><td>'+ oneEmployee.lastName + '</td><td>'+ oneEmployee.idNumber + '</td><td>'+ oneEmployee.jobTitle + '</td><td>$ '+ oneEmployee.salary.toFixed(2) + '</td></tr>');
    }
  };

  //function to iterate over employee array, calculate monthly salary expenditure
  var calculateMonthlySalary = function(){
    var sum = 0;
    for (var i = 0; i < employeeArray.length; i++) {
      sum += employeeArray[i].salary;
    }
    //clear monthly salary value
    $('#monthlySalaryValue').empty();
    //annual salary /12 rounded to two decimals append to monthly salary
    $('#monthlySalaryValue').append('$ ' + (sum/12).toFixed(2));

  };

  var addEmployeeUpdateDOM = function(){
    //var firstName =$('#firstName') = selector .val gets value of input box
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var salary = parseInt($('#salary').val()); //parseInt:string to number
    var employee = {
      firstName: firstName,
      lastName: lastName,
      idNumber: idNumber,
      jobTitle: jobTitle,
      salary: salary
    };

    //push new employee to employeeArray
    employeeArray.push(employee);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#salary').val('');
  };

  //creating an event listener to check if anything happened to clickMe
  $('#clickMe').on('click', function (){
  //on click execute addEmployeeUpdateDOM, updateTable, calculateMonthlySalary
    addEmployeeUpdateDOM();
    updateTable();
    calculateMonthlySalary();

  });
});
