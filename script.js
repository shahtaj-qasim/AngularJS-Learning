var application=angular.module('mainApp',[]);

application.provider('date',function(){
	var greet;
	return {
		setGreeting: function(value){
			greet=value;
		},
		$get : function(){ //return. executed by injector. this code to injector(it controls things)
			return {
				showDate: function(){
					var date = new Date();
					return greet+" its: "+date.getHours();
				},
				devshowDate: function(){
					var date = new Date();
					return date.getHours();
				}
			}
		}
	}
});
//$route and $routeprovider can access provders in only config func
application.config(function(dateProvider){
	//console.log(dateProvider.$get().showDate()); //ans: 20
	var time= dateProvider.$get().devshowDate();
	if(time >0 && time <13){
		dateProvider.setGreeting("Good morning!");
	}
	else if(time >13 && time <17){
		dateProvider.setGreeting("Good day!");
	}
	else if( time>17 && time <19){
		dateProvider.setGreeting("Good Evening");
	}
	else{
		dateProvider.setGreeting("Good night");
	}
});
application.controller('app',function($scope, date){
	$scope.greetMessage=date.showDate();
});