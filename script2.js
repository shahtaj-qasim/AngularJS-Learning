var application = angular.module('mainApp', []);
application.service('fromService', function(){
	this.message="this is from service";
});

application.factory('fromFactory', function(){
	var factory={};
	factory.message="this is from factory!";
	return factory;
});

application.provider('fromProvider',function(){
	var m1="this is from provider!";
	return {
		setAName: function(name){
			m1 +=" "+name
		},
		$get :function(){
			return {
				message: m1
			}
		}
	}
});

application.config(function(fromProviderProvider){
	fromProviderProvider.setAName("codecat");
});
//providers work in config only, providers are more flexible than factories and services
application.controller('app',function(fromService,fromFactory,fromProvider, $scope){
	$scope.greetMessage = [fromService.message, fromProvider.message, fromFactory.message];
});