
var myApp = angular.module('myApp', ['as.sortable']);

myApp.controller('MainCtrl', ["$scope", function ($scope) {

    $scope.word1 = [{
        name: 'U'
    }, {
        name: 'R'
    }, {
        name: 'A'
    }, {
        name: 'L'
    }, {
        name: 'N'
    }, {
        name: 'G'
    }, {
        name: 'A'
    }];

    $scope.word2 = [{
        name: 'K'
    }, {
        name: 'W'
    }, {
        name: 'S'
    }, {
        name: 'O'
    }, {
        name: 'R'
    }];

    $scope.word3 = [{
        name: 'I'
    }, {
        name: 'E'
    }, {
        name: 'K'
    }, {
        name: 'L'
    }];

    $scope.word4 = [{
        name: 'A'
    }, {
        name: 'G'
    }, {
        name: 'M'
    }, {
        name: 'C'
    }, {
        name: 'I'
    }];


    $scope.sortableOptions = {
        containment: '#sortable-container'
    };
}]);