var app = angular.module('xpApp', ['lbServices']);

app.controller('xpController', function($scope, $http, Player) {

 	$scope.players = Player.find();
 	$scope.player;
 	$scope.loading=false;

  	$scope.add = function(){
  		$scope.loading=true;

  		Player.create({name: $scope.player.name, PID: $scope.player.PID }).$promise
 			 .then(function(player) {
 			 		$scope.players.push(player);
          $scope.player.name='';
          $scope.player.PID='';
 			 		$scope.loading=false;
 			  });;
  	};

  	$scope.delete = function($index){

  		$scope.loading=true;
  		var player = $scope.players[$index];

  		Player.deleteById({ id: player.id}).$promise
  		    .then(function() {
				$scope.players.splice($index,1);
				$scope.loading=false;
		     });
  	};

  	$scope.update = function(player){
  		player.$save();
  	};

});
