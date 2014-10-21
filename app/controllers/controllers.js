// Main controller???
app.controller('MainController', function($scope){
	$scope.groups = [
		{
			id : 1,
			name : 'Group One',
			parentid : -1,
			head : -1,
			tail : -1,
			startdate: null,
			enddate: null,
			insertdate : '2014-10-10'
		},
		{

			id : 2,
			name : 'Group Two',
			parentid : -1,
			head : -1,
			tail : -1,
			startdate: null,
			enddate: null,
			insertdate : '2014-10-10'	
		},
		{

			id : 3,
			name : 'Group Three',
			parentid : -1,
			head : -1,
			tail : -1,
			startdate: null,
			enddate: null,
			insertdate : '2014-10-10'
		}
	];

});