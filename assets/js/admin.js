var admin = angular.module('admin',['ngRoute'])

.factory('',function(){

})

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');

  // $routeProvider.when('/',{
  //   templateUrl: '',
  //   controller: '',
  // })
  // .otherwise({redirectTo: '/'})
}]);
