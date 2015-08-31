var app = angular.module('quoteBook');

app.controller('mainCtr', function($scope, dataService) {

	$scope.quotes = dataService.getLocalData();

	$scope.addQuote = dataService.addData;

	$scope.removeQuote = dataService.removeData;

	$scope.newQuote = {
		text: '',
		author: ''
	};

	$scope.sortReverse = false;

	$scope.removeText = '';

});