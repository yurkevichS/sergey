(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController) 
.service('MenuSearchService',MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController  (MenuSearchService) {
  var menu = this;
  menu.items = [];

  menu.getItems = function () {

    menu.items = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
  }

  menu.removeItem = function (itemIndex) {
    
    MenuSearchService.removeItem(itemIndex);
    
  };

}

 
MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {

 var service = this;
 var itemsFound = [];

  service.removeItem = function (itemIndex) {
    itemsFound.splice(itemIndex, 1);
  };


  service.getMatchedMenuItems = function (searchTerm) {
  itemsFound = [];
  var promise = $http({
      method: "GET",
      url: ("http://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (response) {
      var desc ="";
           for (var i = 0; i < response.data.menu_items.length; i++) {
                  desc = response.data.menu_items[i].description;
                  if (desc.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    itemsFound.push(response.data.menu_items[i]);
                  }

           }
         
})

   return itemsFound;
  }

}


 
 })();

