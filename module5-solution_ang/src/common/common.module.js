(function() {
"use strict";
// /menu_items/A1.json
angular.module('common', [])
.constant('ApiPath', 'https://syurkevich-course5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
