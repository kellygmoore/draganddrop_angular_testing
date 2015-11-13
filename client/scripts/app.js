

var myApp = angular.module("myApp", ['as.sortable', 'ngRoute']);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "assets/views/routes/home.html"
        }).
        when('/sortbynumber', {
            templateUrl: "assets/views/routes/sortbynumber.html"
        }).
        otherwise({
            redirectTo: 'home'
        })
}]);

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

    $scope.numberlist1 = [{
        name: '67+24+18'
    } , {
        name: '1000/10'
    } , {
        name: '4x4x4'
    } , {
        name: '450-220-43'
    }];


    $scope.sortableOptions = {
        containment: '#sortable-container'
    };
}]);