(function () {
	'use strict';

	angular
		.module('dashApp')
		.component('dateFilterComponent', {
			 bindings: {
  ngModel: '='
 },
			templateUrl: 'app/components/dateFilter/views/dateFilterComponent.html',
			controller: dateFilterController
		});
		
	dateFilterController.$inject = ['$scope', '$rootScope', '$q', 'httpService'];
	function dateFilterController($scope, $rootScope, $q, httpService) {

    var $vm = this;	
	
	
	function onInit() { };
	
	$scope.dateControlVisible = false;
	var initialOptions = ["Last 1 hour", "Last 2 hour", "Last 3 hour", "Last 4 hour" ,"Last 5 hour", "Custom date"];
	$scope.options = initialOptions;
	$scope.selectedOption = $scope.options[0];

	$scope.$watch('selectedOption', function( val ) {
	if( val === 'Custom date' ) {
	
	$scope.dateControlVisible = true;
	} else {
	//$scope.options = initialOptions;
	$scope.dateControlVisible = false;
	}
	});	
	
	$vm.filterGo = function(){	
	
    $rootScope.$broadcast('getDate', {startDate:$vm.picker5.date , endDate:$vm.picker6.date });  
	
	}


    this.picker5 = {
        date: new Date(),
		        closed: function() {
        }
    };	
	

    this.picker6 = {
        date: new Date(),
		closed: function() {
        }
    };
	
	
	this.openCalendar = function(e, picker) {
	$vm[picker].open = true;
};




	}
})();