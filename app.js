var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {


}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {


}]);
