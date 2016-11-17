
var app = angular.module('todoModule', []);

app.controller('todoController', function($scope) {
	$scope.chores = ['Mow the Lawn', 'Walk the Dog', 'Take Out Trash'];
	$scope.onclick = function(choreToAdd) {
		$scope.chores.push(choreToAdd);
		$scope.choreToAdd = "";	
	};
	$scope.removeChore = function(chore) {
		var index = $scope.chores.indexOf(chore);
		$scope.chores.splice(index, 1);
	}

});



