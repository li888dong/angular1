/**
 * Created by Administrator on 2017/6/8.
 */
import angular from 'angular';
import style from '../less/index.less'
const app = angular.module('app', []);
app.controller('ctr1', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.user = {
        name: 'lidong',
        age: '26',
        sex: 'man'
    };
    $scope.htmlt = "<span class='red'>11</span>";
    $timeout(function () {
        $scope.user.name = '李栋'
    }, 3000)
}]);