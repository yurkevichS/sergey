(function () {
'use strict';

angular.module('MenuApp')
.controller('ListController', ListController);


ListController.$inject = ['MenuDataService', 'categories'];
function ListController(MenuDataService, categories) {
  var mainlist = this;
  mainlist.categories = categories;
  
  
}

})();
