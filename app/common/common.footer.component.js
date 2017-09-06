(function(){
    'use strict';


angular.module('dashApp')
.component('footer', {
	templateUrl: "app/common/views/footer.html",
	controller: footerController
});

footerController.$inject = ['$scope', '$filter'];
function footerController($scope, $filter) {


}


}()); /* End of the code */

