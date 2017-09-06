(function () {


  angular.module('dashApp')

    .service('httpService', function ($http, $q) {
      var $vm = this;

      var posts = undefined;

      this.callApi = function (apiname) {
        var request = $http({
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          method: "get",
          url: "http://localhost:3000/" + apiname,
        });
		
        return (request.then(handleSuccess, handleError));
		
      }
	  
	   this.callApiTotalChart = function (apiname) {
	   
        var request1 = $http({
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          method: "get",
          url: "http://localhost:3000/" + apiname,
        });
		
		 var request2 = $http({
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          method: "get",
          url: "http://localhost:3000/" + apiname,
        });
		
        return (request.then(handleSuccess, handleError));
		
      }
	  
      $vm.callApiTotalChart2 = function (apiOne, apiTwo) {

        var fleetSuccess = $http.get("http://localhost:3000/"+apiOne),
          fleetFailed = $http.get("http://localhost:3000/"+apiTwo);

        return $q.all([fleetSuccess, fleetFailed]).then(function (response) {
		
        return response;

        });	


      }
      function handleError(response) {
        if (
          !angular.isObject(response.data) ||
          !response.data.message
        ) {
          return ($q.reject("An unknown error occurred."));
        }

        return ($q.reject(response.data.message));
      }

      function handleSuccess(response) {
        return (response.data);
      }



      this.jsonRead = function (response) {

        return angular.fromJson(response);

      }

      this.responseCount = function (response) {

        return response.length;

      }


      this.getPosts = function (apipoint) {

        if (!posts) {

          var deferred = $q.defer();

          $http.get('http://localhost:3000/' + apipoint)

            .then(function (result) {
            
              posts = result.data;
             
              deferred.resolve(posts);
            }, function (error) {
              posts = error;
              deferred.reject(error);
            });

            posts = deferred.promise;
        }

        return $q.when(posts);
      };

    });  /* Service */


} ()); /* module */