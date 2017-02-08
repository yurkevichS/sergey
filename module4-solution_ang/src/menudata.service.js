(function () {
'use strict';

angular.module('Data', [])
.service('MenuDataService',MenuDataService);

 
MenuDataService.$inject = ['$http'];
function MenuDataService($http) {

 var service = this; 
 var categories = [];
 var items = [];

 
 
service.getAllCategories = function () {
 
  var request = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    }).then(function (response) {
       categories = response.data;
       return categories;
    })

   return request;
  }

service.getItemsForCategory = function (shortName) {
   
  var request = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      params: {
        category: shortName
      }
      
    }).then(function (response) {
       items = response.data.menu_items;
      return items;
    })

   return request;
  }

}

 
 })();