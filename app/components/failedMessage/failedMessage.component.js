(function () {
	'use strict';

	angular
		.module('dashApp')
		.component('failedMessageComponent', {
			 bindings: {
  ngModel: '='
 },
			templateUrl: 'app/components/failedMessage/views/failedMessageComponent.html',
			controller: gridFailedMessageController
		});

	gridFailedMessageController.$inject = ['$scope', '$rootScope', '$q', 'httpService'];
	function gridFailedMessageController($scope, $rootScope, $q, httpService) {
	
		var $vm = this;
		
	$scope.$on('getDate', function(events,args){

	console.log('Failed Message'+args.startDate);
	console.log('Failed Message'+args.endDate);

	});

		$scope.listMessages = function(fleetidp){
			//console.log(fleetidp );
	
         $rootScope.$broadcast('list', fleetidp);        
    	}
		
		
					var initialOptions = ["Fleet", "Device"];

					$scope.options = initialOptions;
					$scope.selectedOption = $scope.options[0];
					
					$vm.objType = 'analytics/fleet';

					$scope.$watch('selectedOption', function( val ) {
					if( val === 'Fleet' ) {

					$vm.objType = 'analytics/fleet';
					$vm.getPosts();
					
					} else {
					
					$vm.objType = 'analytics/devices';
					$vm.getPosts();
					
					}
					});

		$vm.getPosts = function () {

			httpService.callApi($vm.objType)		
				.then(function (response) {

					var result = httpService.jsonRead(response);

					/* Grid */
					$vm.rowCollection = result[0].data;
					

					
					$scope.onClick = function (points, evt) {
					console.log(points, evt);
				  };

					/* Bar */
					$vm.result = httpService.jsonRead(response);
					$vm.resultCount = httpService.responseCount(result[0].data);
					$vm.resultData = result[0].data;

					$vm.itemName = []; $vm.itemCount = [];

					for (var i = 0; i < $vm.resultCount; i++) {
						$vm.itemName.push($vm.resultData[i].fleet_id);
						$vm.itemCount.push($vm.resultData[i].count);
						//device_id
					}

					$vm.labels = $vm.itemName;

					$vm.data = $vm.itemCount;
					$vm.colors = ['#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'];

					$vm.options = {
					events: $scope.onClick,
					tooltips: {
						mode: 'dataset'
					}

					/*	title: {
							display: true,
							fontsize: 14,
							text: 'Bar Chart',
							position: 'top'
						},
						legend: {
							display: true,
							position: 'bottom',
							labels: {
								fontColor: 'rgb(255, 99, 132)'
							}
						}*/
					};

				});
		};

		$vm.getPosts();

	}






})();