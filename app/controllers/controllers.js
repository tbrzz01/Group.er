// Main controller???
grouperApp.controller('MainController', function($scope){
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


	function addGroup(){
		var newGroup = {
			id : $scope.groups.length,
			name : 'Group ' + $scope.groups.length,
			parentid : -1,
			head : -1,
			tail : -1,
			startdate: null,
			enddate: null,
			insertdate: '20134-10-20'
		};

		$scope.groups.push(newGroup);
	}

	$scope.addGroup = addGroup;
});

grouperApp.controller('StatsController', function($scope){

});