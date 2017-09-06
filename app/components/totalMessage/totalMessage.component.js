(function () {
	'use strict';

	angular
		.module('dashApp')
		.component('totalMessageComponent', {
			templateUrl: 'app/components/totalMessage/views/totalMessageComponent.html',
			controller: doughnutTotalMessageController
		});

	doughnutTotalMessageController.$inject = ['$scope', '$q', 'httpService'];
	function doughnutTotalMessageController($scope, $q, httpService) {

		var $vm = this;
		function onInit() { };
		$vm.failedCount = 0;
		$vm.successCount = 0;


		$scope.$on('getDate', function(events,args){
		
		console.log('Total Message'+args.startDate);
		console.log('Total Message'+args.endDate);
		
		/*
		
					httpService.callApi('events').then(function (response) {
						
					response = httpService.jsonRead(response);

		
					$vm.rowCollection = response[0].data;
					
				}); */
	   
        });
		
		
			this.getData =  function (response) {
			
			var result , resultCount = httpService.responseCount(response);	

			for (var i = 0; i < resultCount; i++) {
			result  += Number(response[i].count);
			}	

			return result;

			}

			httpService.callApiTotalChart2('analytics/fleetSuccess','analytics/fleetFailed').then(function (response) {
				
					//console.log(response);
					
					response = httpService.jsonRead(response);					

					var resultSuccess = response[0].data[0].data;
					var resultFailed = response[1].data[0].data;
					
					var resultCountSuccess = httpService.responseCount(resultSuccess);					
					var resultCountFailed = httpService.responseCount(resultFailed);
					
					for (var i = 0; i < resultCountSuccess; i++) {
					$vm.successCount += Number(resultSuccess[i].count);
					}
					
					for (var i = 0; i < resultCountFailed; i++) {
						$vm.failedCount += Number(resultFailed[i].count);						
					}
			
					
					//$vm.successCount = $vm.getData(response[0].data[0].data);					
					//$vm.failedCount = $vm.getData(response[1].data[0].data);

					$vm.labels = ["Failed Messages", "Successful Message"];
					$vm.data = [$vm.failedCount.toFixed(), $vm.successCount.toFixed()];
					$vm.colors = ['#FDB45C', '#949FB1'];

					var totalC = ($vm.failedCount + $vm.successCount);
					var resulta = ($vm.failedCount * 100) / totalC;
					var resultb = ($vm.successCount * 100) / totalC;					

					$vm.options = {
						title: {
							display: true,
							fontsize: 14,
							text: 'By Number #',
							position: 'top'
						},
						legend: {
							display: true,
							position: 'bottom',
							labels: {
								fontColor: 'rgb(255, 99, 132)'
							}
						}
					};

					$vm.data2 = [resulta.toFixed(), resultb.toFixed()];
					$vm.options2 = {
						title: {
							display: true,
							fontsize: 14,
							text: 'By Percentage %',							
							position: 'top'
						},
						legend: {
							display: true,
							position: 'bottom',
							labels: {
								fontColor: 'rgb(255, 99, 132)'
							}
						}
					};

				});

	}
})();