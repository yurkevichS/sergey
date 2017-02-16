(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService);


SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;
  var items = [];
  
service.user = {};  
  service.storeData = function (usr) {
	
    service.user.firstname = usr.firstname;
    service.user.lastname = usr.lastname;
    service.user.email = usr.email;
    service.user.phone = usr.phone;
    service.user.sn = usr.sn;
    // console.log(service.user);
  };

service.getData = function () {

    return service.user;

  };

  service.getItemsForCategory = function (shortName) {
   
  var request = $http({
      method: "GET",
      url: (ApiPath + "/menu_items/" + shortName + ".json")
      
    });
  // .then(function (response) {
  //      items = response.data;
  //      // console.log(ApiPath + "/menu_items/" + shortName + ".json");
  //      console.log(items);
  //     // return items;
  //   })
 	
   return request;
  }

  

}



})();
