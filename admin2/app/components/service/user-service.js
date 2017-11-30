'use strict';

angular.module('myApp.userService', [])

    .factory('UserService', ['$http', function($http) {
        var users;
        return {
            all:function () {
                return $http.get('http://localhost/dami/get-users-cors.php')
                    .then(function (resp) {
                        users = resp.data;
                    });
            },
            getUsers:function () {
               return users;
            },
            setUsers:function (usrs) {
                users = usrs;
            }
        };
    }]);