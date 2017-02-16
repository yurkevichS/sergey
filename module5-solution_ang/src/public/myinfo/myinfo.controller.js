(function () {
"use strict";


angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['SignupService', 'ApiPath'];
function MyinfoController(SignupService, ApiPath) {
  var info = this;
  info.basePath = ApiPath;
  info.user = SignupService.getData();

if (info.user.sn){
  var promise = SignupService.getItemsForCategory(info.user.sn.toUpperCase());
	promise.then(function (request) {
	     info.menuItem = request.data;
	});
    
  };
}
   



})();
