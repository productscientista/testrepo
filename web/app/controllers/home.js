angular.module('Starter')  .controller('HomeController', ['$scope', '$wakandaManager', function($scope, $wakandaManager) {    $wakandaManager.getDataStore().then(function(ds) {      console.log('Angular-Wakanda is ready!');      ds.Superhero.$query({orderBy:"ID desc",pageSize:3}).$promise.then(function(response) {         $scope.favoriteSuperheroes = response.result;        });  	}).catch(function(err) {      console.warn(err);    });  }]);