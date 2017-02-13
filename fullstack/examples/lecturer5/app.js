(function(){
  'use strict';
  angular.module('myFirstApp',[])
  .controller('MyFirstController', function($scope){
    $scope.name = "Gilles";
    $scope.sayHello  = function(){
      return "Hello Coursera";
    }
  });

})();
