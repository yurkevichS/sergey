(function () {
"use strict";


angular.module('public')
.directive('checksn', Checksn);


Checksn.$inject = ['SignupService'];

function Checksn(SignupService) {
  var ddo = {
  	require: 'ngModel',
  	link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
            	console.log(value.toUpperCase());
            	var promise = SignupService.getItemsForCategory(value.toUpperCase());
					promise.then(function (request) {
					mCtrl.$setValidity('sn', true);
					
					})
					.catch(function (error) {
				    mCtrl.$setValidity('sn', false);
				    });

                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }

  };

  return ddo;
}







})();
