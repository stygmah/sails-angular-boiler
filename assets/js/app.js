var dummy = angular.module('dummy',['ngRoute'])

.factory('',function(){

})

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');

  $routeProvider.when('/',{
    templateUrl: 'templates/modules/Home.html',
    controller: 'HomeCtrl',
  })
  .otherwise({redirectTo: '/'})
}])
