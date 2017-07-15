weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){

  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

  $scope.submit = function() {
    $location.path("/forecast");
  };

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){

  $scope.city = cityService.city;

  $scope.weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=b795fca48ffe152cb74fee8f035ca8aa", { get: { method: "JSONP" }});

  $scope.weatherResult = $scope.weatherApi.get({ q: $scope.city });

  $scope.ctf = function(degk){
    return Math.round((1.8 * (degk - 273)) + 32);
  };

  $scope.ctd = function(dt){
    return new Date(dt * 1000);
  };

}]);
