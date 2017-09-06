(function () {
	'use strict';

	angular
		.module('dashApp')
		.component('messagesListComponent', {
			templateUrl: 'app/components/messagesList/views/messagesListComponent.html',			
			controller: messagesListController
		});

	messagesListController.$inject = ['$scope','$rootScope', '$q', 'httpService'];
	
	function messagesListController($scope, $rootScope, $q , httpService) {

		var $vm = this;
		
		function onInit() { };
		


        $scope.$on('list', function(events,args){
		
		$vm.fleet_id = args;
		
					httpService.callApi('events').then(function (response) {
						
					response = httpService.jsonRead(response);

					/* Grid */
					$vm.rowCollection = response[0].data;
					
				});
	   
        });	


	}


/*
  angular.module('dashApp')

	.directive('csSelect', function () {
    return {
        require: '^stTable',
        template: '<input type="checkbox"/>',
        scope: {
            row: '=csSelect'
        },
        link: function (scope, element, attr, ctrl) {

            element.bind('change', function (evt) {
                $scope.$apply(function () {
                    ctrl.select(scope.row, 'multiple');
                });
            });

            $scope.$watch('row.isSelected', function (newValue, oldValue) {
                if (newValue === true) {
                    element.parent().addClass('st-selected');
                } else {
                    element.parent().removeClass('st-selected');
                }
            });
        }
    };
});

*/


})();