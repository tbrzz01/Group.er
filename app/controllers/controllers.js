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
			insertdate : '2014-10-10',
			groups : []
		},
		{

			id : 2,
			name : 'Group Two',
			parentid : -1,
			head : -1,
			tail : -1,
			startdate: null,
			enddate: null,
			insertdate : '2014-10-10',
			groups : []
		},
		{

			id : 3,
			name : 'Group Three',
			parentid : -1,
			head : -1,
			tail : -1,
			startdate: null,
			enddate: null,
			insertdate : '2014-10-10',
			groups : []
		}
	];

	$scope.addGroup = function() {
		var newGroup = {
			id : $scope.groups.length,
			name : 'Group ' + $scope.groups.length,
			parentid : -1,
			head : -1,
			tail : -1,
			startdate: null,
			enddate: null,
			insertdate: '2014-10-20',
			groups : []
		};

		$scope.groups.push(newGroup);
	};

	$scope.addToGroup = function(data, evt){
		// check to see that group doesn't have
		// draggable
		// data = dropped on
		// evt.data = dragged
		if(evt){
			// TODO : check for existence of group in dropped on
			var index = data.groups.indexOf(evt.data);
			if(index < 0){

				// check for same group
				if(data.id != evt.data.id){
					data.groups.push(evt.data);
				}	

				index = $scope.groups.indexOf(evt.data);
				// remove from top level list
				if(index > -1) $scope.groups.splice(index, 1);		
			}
			
		}
	};
});

grouperApp.controller('StatsController', function($scope){

});