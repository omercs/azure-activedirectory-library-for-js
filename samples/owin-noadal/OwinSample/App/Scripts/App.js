'use strict';
var app = angular.module('demoApp', ['ngRoute']);

app.config(function ($routeProvider) {

    // Home landing page is not protected by login. 
    $routeProvider.when("/home", {
        controller: "HomeController",
        templateUrl: "/App/Views/Home.html"
    });

    $routeProvider.when("/login", {
        controller: "HomeController",
        templateUrl: "/App/Views/Login.html"
    });

    $routeProvider.when("/TodoList", {
        controller: "TodoListController",
        templateUrl: "/App/Views/TodoList.html"
        //,requireADLogin: true
    });

    $routeProvider.when("/TodoList/Detail/:param", {
        controller: "TodoDetailController",
        templateUrl: "/App/Views/TodoDetail.html"
    });

    $routeProvider.when("/TodoList/New", {
        controller: "TodoDetailController",
        templateUrl: "/App/Views/TodoNew.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });

});

