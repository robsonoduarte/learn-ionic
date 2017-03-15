var app = angular.module('caffeinehit.controllers', []);

app.controller("YelpController", function ($scope, YelpService) {
	$scope.yelp = YelpService;


	$scope.doRefresh = function(){
		if(!$scope.yelp.isLoading){
			$scope.yelp.refresh().then(function(){
				$scope.$broadcast('scroll.refreshComplete')
			})
		}
	}
});
