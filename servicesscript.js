var application= angular.module('mainApp',[])

//application.controller()

/*application.service('random',function(){
	var num=Math.floor(Math.random()*10);
	this.generate= function(){
		return num;
	}
}); //services are embedded in modules and work in one module in which it is implemented
*/

application.factory('random',function(){
	var randomObject={};
	var num=Math.floor(Math.random()*10);
	randomObject.generate= function(){
		return num;
	}
	return randomObject;
});
application.controller('app',function($scope, random){
	$scope.generateRandom= function(){
		$scope.randomNumber=random.generate();
	};
});

//services and factories are singleton (generate only 1 time when button is clicked)
//if u keep clicking button it wont generate more

//ran the service, passed the reference of the service