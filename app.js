var app = angular.module('basicApp', []);

app.controller('BasicController', function (){
  console.log('BasicController loaded');

  var self = this;
  self.employees = [];
  self.monthlyExpend = 0;

  self.createEmployee = function (){
    console.log('Submit employee', self.employee);
    self.employees.push(angular.copy(self.employee));
    //clears form
    calculateTableSum(self.employees)
    self.employee = null;
  };

  self.deleteEmployee = function (employee){
    //gets the index of the employee to be deleted
    var index = self.employees.indexOf(employee);
    //removes only that employee
    self.employees.splice(index, 1);
    calculateTableSum(self.employees);
  };
//function to get monthly expenditures
  function calculateTableSum(){
    var total = 0;
    //loops through employee array and adds the monthly salaries together
    for (var i = 0; i<self.employees.length; i++){
      monthly = Number(self.employees[i].annualSalary/12);
      total += monthly;
    }
    //updates the monthly expenditures
    return self.monthlyExpend = total;
}

});
