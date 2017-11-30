'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope','$http','$location',function($scope,$http,$location) {
    // $http.jsonp('http://localhost/dami/get-users.php?jsonp_callback=JSON_CALLBACK')
    //     .then(function (resp) {
    //         console.log(resp);
    //     })
    $http.get('http://localhost/dami/get-users-cors.php')
        .then(function (resp) {
            console.log(resp);
            $scope.users = resp.data;
        });
    $scope.addUser = function () {
        $location.path('/view1.editUser')
    }
}]);








