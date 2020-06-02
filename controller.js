//var app= angular.module('mainApp',['ngRoute']);
var app= angular.module('mainApp',[]);
/*app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		template: 'Welcome user!'  
	})
	.when('/anotherPage',{
		template: 'Welcome on other page'
	})
	.otherwise({
		redirectTo: '/'
	});
});*/

/*app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		//template: '<b>This is template</b>' //now only template will work
		templateURL: 'login.html'  //take content, as it is from  page.html so no tags
	})
	.when('/dashboard',{
		resolve:{
			"check":function($location, $rootScope){   //rootscope is variable accessible in every controllers, directores factories
				if($rootScope.loggedIn){
					$location.path('/');
				}
			}
		},
		templateURL: 'dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginCtrl', function($scope, $location ,$rootScope){
	$scope.submit=function(){
		if($scope.username == 'admin' && $scope.password == 'admin'){
			$rootScope.loggedIn =true
			$location.path('/dashboard');
		}
		else{
			alert('Wrong stuff');
		}
	}
});

*/
/*
//https
var app =angular.module('mainApp',[]);  //array [] me dependencies likhte
app.controller('people',function($scope, $http){
	$http.get('http://127.0.0.1/AngularJS/database.json')
	.success(function($response){
		$scope.persons= response.records;
	})
});*/

/*
var app= angular.module('mainApp',[]);

app.controller('app',function($scope){
	$scope.counter= -1;
	$scope.$watch('myText', function(newvalue, oldvalue){
		//console.log("New value "+newvalue);
		//console.log("old value "+oldvalue);
		$scope.counter++;
		if($scope.counter==100){
			alert("hi");
		}
	});
});*/


app.controller('app',function($scope){
	$scope.myRandomNumber=Math.random();
	document.querySelector('input').addEventListener('click',function(){
		console.log('button clicked');
		$scope.myRandomNumber=Math.random();
		$scope.$digest(); //checks for any cycles and triggers them due to this line random num updates
	},false);
});