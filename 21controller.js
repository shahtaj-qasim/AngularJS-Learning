var app= angular.model('mainApp',[]);

app.controller('app',function($scope){
	$scope.counter=0;
	$scope.$watch('myText', function(newvalue, oldvalue){
		console.log(newvalue);
		console.log(oldvalue);
	});
});