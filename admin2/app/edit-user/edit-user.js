'use strict';

angular.module('myApp.view1.editUser', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1.editUser', {
            templateUrl: 'edit-user/edit-user.html',
            controller: 'EditUserCtrl'
        });
    }])

    .controller('EditUserCtrl', [
        '$scope', '$http', '$location','UserService',
        function ($scope, $http, $location,UserService) {
        $scope.action = '新增用户';
        $scope.user;
        $scope.onSubmit = function () {
            console.log($scope.user);
            $http.post(
                'http://localhost/dami/edit-user.php', $scope.user)
                .then(function (resp) {
                    console.log(resp);
                    var result = resp.data;
                    if(result.success) {//操作成功
                        //更新本地缓存数据
                        UserService.setUsers(result.data);
                        //跳转页面
                        $location.path('/view1')
                    }else{
                        alert('保存失败，请重试！')
                    }
                })
        }
    }]);








