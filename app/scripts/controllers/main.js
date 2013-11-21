'use strict';

angular.module('helloyeomanApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore && todosInStore.split('\n') || [];
    $scope.$watch(function() {
      localStorageService.add('todos', $scope.todos.join('\n'));
    });
    $scope.addTodo = function() {
      $scope.todos.push($scope.newtodo);
      $scope.newtodo = '';
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };
  });
