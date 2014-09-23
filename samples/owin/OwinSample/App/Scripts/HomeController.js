'use strict';
app.controller('HomeController', ['$scope', '$location', 'AuthenticationService', function ($scope, $location, AuthenticationService) {
    $scope.logout = function () {
        AuthenticationService.logOut();
    };

    $scope.login = function () {
        AuthenticationService.login();
    };

    $scope.$on("adal:loginSuccess", function () {
        $location.path("/home");
    });

    $scope.$on("adal:loginFailure", function () {
        $location.path("/login");
    });

    $scope.$on("adal:notAuthorized", function (event, rejection, forResource) {
        $scope.testMessage = "It is not Authorized for resource:" + forResource;
    });

    $scope.init = function () {
        $scope.testMessage = "";
    };

}]);