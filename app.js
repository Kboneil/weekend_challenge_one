$(document).ready(function(){
  $('#employeeInfo').on('submit', function(event) {
    event.preventDefault();

    var employee = {};

    var fields = $('#employeeInfo').serializeArray();

    fields.forEach(function (element, index) {
      employee[element.name]=element.value
    });

    console.log('employee object', employee);

    $('#employeeInfo').find('input[type=text]').val('');

//call this function to append to Dom with table
    appendTable(employee);

//call this function to calculate the sum of the monthly
//salaries of each employee

    calculateTableSum();

//if the delete button is clicked this function happens
$('.table').on('click', '.btnDelete', function () {
    //it sets this row's annual salary as the salary variable
     var salary = $(this).text();
    //removes the entire table row
      $(this).closest('tr').remove();
    //and calls the table sum function to get a new expenditures value
      calculateTableSum(salary);
      });



  });

//function for table
function appendTable(emp) {
//appends a new row from the form input
//and adds a delete button at the end
  $('.table').append('<tr><td>' + emp.employeeFirstName + '</td><td>' + emp.employeeLastName + '</td><td>' + emp.employeeIdNumber + '</td><td>' + emp.employeeJobTitle + '</td><td class = "tableSal">' + emp.employeeAnnualSalary + '</td><td><button type="button" class="btnDelete">Delete</button></td></tr>');
  }
//function for the sum of monthly salaries

function calculateTableSum(salary){
          var total = 0;
          $('.tableSal').each(function () {
          //loops through each employee salary
                var value = $(this).text();
          //sets their annual salary as a value
                total += Math.round((value/12));
          //divides it by 12 to get the monthly cost and adds it to the total
            });
          $('#monthlyExpend').text('$' + total);
        //changes the total on the DOM
    }

});
