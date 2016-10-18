var app = angular.module('basicApp', []);

app.controller('BasicController', function (){
  console.log('BasicController loaded');

  var self = this;
  self.employees = [];

  self.createEmployee = function (){
    console.log('Submit employee', self.employee);
    self.employees.push(angular.copy(self.employee));
    //clears form
    calculateTableSum()
    self.employee = null;
  };

  self.deleteEmployee = function (employee){
    console.log('Delete employee', self.employee);
    //gets the index of the employee to be deleted
    var index = self.employees.indexOf(employee);
    console.log('index', index);
    //removes only that employee
    self.employees.splice(index, 1);
    calculateTableSum();
  };

});

//
// function calculateTableSum(salary){
//           var total = 0;
//           $('.tableSal').each(function () {
//           //loops through each employee salary
//                 var value = $(this).text();
//           //sets their annual salary as a value
//                 total += Math.round((value/12));
//           //divides it by 12 to get the monthly cost and adds it to the total
//             });
//           $('#monthlyExpend').text('$' + total);
//         //changes the total on the DOM
//     }
//
// });
