/**
 * Created by Administrator on 2017/6/8.
 */
import angular from 'angular';
import angularRoute from 'angular-route';
import style from './src/less/index.less';
const app = angular.module('app', ['ngRoute']);
app.controller('ctr1', ['$scope', '$timeout', '$routeParams',function ($scope, $timeout,$routeParams) {
    $scope.user = {
        name: 'lidong',
        age: '26',
        sex: 'man'
    };
    $scope.htmlt = "<span class='red'>11</span>";
    $timeout(function () {
        $scope.user.name = '李栋'
    }, 3000);
    console.log($routeParams)
}]);
app.directive('hello',function(){
    return {
        restrict: 'E',
        template:'<span class="red" ng-transclude></span>',
        transclude:true
    }
});
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{template:'这是首页页面'})
        .when('/computers/:id?',{template:'这是电脑分类页面'})
        .when('/printers',{template:'这是打印机页面'})
        .otherwise({redirectTo:'/'});
}]);