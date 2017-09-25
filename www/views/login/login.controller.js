/**
 * Created by Administrator on 2017/9/19.
 */
angular.module('starter.controllers')
.controller('LoginCtrl' ,['$scope',function ($scope) {
  $scope.user={
    username:'lc',
    password:'123456'
  };
  $scope.login=function () {
    console.log($scope,user);
  };
  }]);
