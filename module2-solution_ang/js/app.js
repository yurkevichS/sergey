(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
   var showBuyList = this;
  showBuyList.items = ShoppingListCheckOffService.getItemsToBuy();
  showBuyList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
 }


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var showBougthList = this;
  showBougthList.items = ShoppingListCheckOffService.getItemsBouhth();
 }

 
 function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var buyList = [
  { name: "cookies #1", quantity: 10 },
  { name: "coke", quantity: 15 },
  { name: "cola", quantity: 1 },
  { name: "chips", quantity: 13 },
  { name: "cookies #2", quantity: 20 }
  ];

  var bougthList = [];

    service.removeItem = function (itemIndex) {

     bougthList.push(buyList[itemIndex]);
     buyList.splice(itemIndex, 1);
 };

  service.getItemsToBuy = function () {
    return buyList;
  };
  service.getItemsBouhth = function () {
    return bougthList;
  };
}
 
 })();
