var admin = angular.module('admin',['ngRoute'])

.factory('',function(){

})

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');

  $routeProvider.when('/',{
    templateUrl: 'templates/admin/AdminHome.html',
    controller: 'HomeCtrl',
  })
  .otherwise({redirectTo: '/'})
}]);
