/** *************Angular controller JS*********************/
"use strict";
app.controller("ContactController", function ($scope, $http) {
  $scope.result = "hidden";
  $scope.resultMessage;
  $scope.formData; //formData is an object holding the name, email, subject, and message
  $scope.submitButtonDisabled = false;
  $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
  $scope.submit = function (contactform, e) {
    e.preventDefault();
    $scope.submitted = true;
    $scope.submitButtonDisabled = true;
    if (contactform.$valid) {
      $http({
        method: "POST",
        url: "https://cv-josh-server.herokuapp.com/api/request-lead",
        data: $.param($scope.formData), //param method from jQuery
        headers: {
          "X-Api":
            "Basic 9wjBdyvd*JINkAbyLz3R*h!z^RK@0W8S4N02P1arFmLX#Revr*xvnN!yNc@2",
          "Content-Type": "application/x-www-form-urlencoded",
        }, //set the headers so angular passing info as form data (not request payload)
      }).success(function (data) {
        console.log(data);
        if (data.statusOk) {
          //success comes from the return json object
          $scope.submitButtonDisabled = false;
          $scope.formData = null;
          $scope.resultMessage = data.message;
          $scope.result = "bg-success";
        } else {
          $scope.submitButtonDisabled = false;
          $scope.resultMessage = data.message;
          $scope.result = "bg-danger";
        }
      });
    } else {
      $scope.submitButtonDisabled = false;
      $scope.resultMessage = "Failed :( Please fill out all the fields.";
      $scope.result = "bg-danger";
    }
  };
}); 
