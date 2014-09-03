var app = angular.module("MyApp", []);

app.controller("SchCtrl", function($scope, $http) {
    $http.get('/appointments.json').
        success(function(data, status, headers, config) {
            $scope.appointments = data;
        }).
        error(function(data, status, headers, config) {
            // log error
        });
});