
var grouperApp = angular.module('group.er', ['ngRoute']);

grouperApp.config(function ($routeProvider){
	$routeProvider
		.when('/view1',
		{
			controller: 'MainController',
			templateUrl: 'views/view1.html'
		})
		.when('/stats',
		{
			controller: 'StatsController',
			templateUrl: 'views/stats.html'
		})
		.otherwise({ redirectTo: '/view1'});
});