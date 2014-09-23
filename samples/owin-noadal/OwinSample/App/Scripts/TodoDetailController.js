'use strict';
app.controller('TodoDetailController', ['$scope', '$location', '$routeParams', 'TodoService', function ($scope, $location, $routeParams, TodoService) {
    $scope.param = $routeParams.param || 1;
    $scope.todo = { todoItemId: $scope.param };
    $scope.populate = function () {
        TodoService.getItem($scope.param).then(function (result) {
            $scope.todo = result.data;
        });
    };

    $scope.save = function () {
        TodoService.updateItem($scope.param, $scope.todo).then(function (result) {
            $location.path("/TodoList");
        }, function (err) {
            $scope.error = err;
        });
    }

    $scope.add = function () {
        TodoService.postItem($scope.todo).then(function (result) {
            $location.path("/TodoList");
        }, function (err) {
            $scope.error = err.data;
        });
    }
}]);