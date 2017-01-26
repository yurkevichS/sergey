(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController) 
.service('MenuSearchService',MenuSearchService);
// .directive('foundItems', FoundItemsDirective);


// function FoundItemsDirective() {
//   var ddo = {
//     templateUrl: 'foundItems.html',
//     scope: {
//       items: '<'
//     } 
    
//   };

//   return ddo;
// }




NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController  (MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";



  menu.matchedMenuItems = function (){
    // console.log("menu.searchTerm is " + menu.searchTerm);
      menu.found = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
     // console.log("menu.found " + menu.found);
    
  }
}

 
 
MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
 var service = this;

 service.getMatchedMenuItems = function (searchTerm) {

  var foundItems = [];

  var promise = $http({
      method: "GET",
      // url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      url: ("http://davids-restaurant.herokuapp.com/categories.json")
      
    });

  promise.then(function (response) {
      console.log("response " + response);
      console.log("response.data " + response.data);

      // for (var i = 0; i = response.data.menu_items.length; i++) {
      //  var desc = response.data.menu_items[i].description;
      //    if (desc.toLowerCase().indexOf(searchTerm) !== -1) {
      //      foundItems[i] = response.data.menu_items[i];
      //     }
      //   }
      })
    .catch(function (error) {
      console.log(error);
    })


return foundItems;


      
      
  }
}



 
 })();
