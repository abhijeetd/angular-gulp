(function(){
    'use strict';


angular.module('dashApp')
.component('header', {
	templateUrl: "app/common/views/header.html",
	controller: headerController
});

headerController.$inject = ['$scope', '$filter'];
function headerController($scope, $filter ) {

$scope.message = 'Page content comming soon!';

}





}()); /* End of the code */

