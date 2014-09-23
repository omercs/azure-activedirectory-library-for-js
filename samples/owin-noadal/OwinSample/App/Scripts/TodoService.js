'use strict';
app.factory('TodoService', ['$http', function ($http) {


    var serviceFactory = {};

    var _getItems = function () {
        return $http.get('/api/Todo');
    };

    var _getItem = function (id) {
        return $http.get('/api/Todo/' + id);
    };

    var _postItem = function (item) {
        return $http.post('/api/Todo/', item);
    };

    var _updateItem = function (id, item) {
        return $http.put('/api/Todo/'+ id, item);
    };

    var _deleteItem = function (id) {
        return $http.delete('/api/Todo/' + id);
    };

    serviceFactory.getItems = _getItems;
    serviceFactory.getItem = _getItem;
    serviceFactory.postItem = _postItem;
    serviceFactory.updateItem = _updateItem;
    serviceFactory.deleteItem = _deleteItem;
    
    return serviceFactory;

}]);