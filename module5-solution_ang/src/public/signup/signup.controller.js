(function () {
"use strict";


angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['SignupService'];
function RegistrationController(SignupService) {
  var reg = this;
  var items = [];

  
  

  reg.submit = function () {
    
    var promise = SignupService.getItemsForCategory(reg.user.sn.toUpperCase());
	promise.then(function (request) {
		reg.err = false;
		items = request.data;
		//console.log(items);
		SignupService.storeData(reg.user);
		reg.completed = true;

	})
	.catch(function (error) {
      console.log(error.statusText);
      reg.err = true;
    });
    
  };


}

})();
