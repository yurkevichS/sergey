// If the number of items in the textbox is less than or equal to 3 (e.g., 1, 2, or 3), 
// a message should show up under to the textbox saying "Enjoy!". If the number of items 
// is greater than 3 (4, 5, and above), the message "Too much!" should show up under the
// textbox. (Hint: To implement this behavior you can utilize the split method. 
// See documentation for that method)

// If the textbox is empty and the user clicks the "Check If Too Much" button, 
// the message "Please enter data first" should show up. 'Empty' here means 
// either "" (empty string) or a string with just spaces in it. (Hint: AngularJS 
// ng-model already performs the trimming for you, so there shouldn't 	
// be anything you need to do.)
// Only 1 message should be shown at any given time. In other words, 
// if you have both messages "Enjoy!" and "Too much!" showing up at the 
// same time, it's an error.

// You are not required to handle a case where there is no item between 
// some commas. For example, you are free to consider this case item 1, 
// item2,,item3 or this case item 1, item2, ,item3 as 4 items in the list. 
// However, you can implement checking for an 'empty' item as a bonus feature 
// (ungraded). Please make sure to put a comment somewhere next to the input 
// textbox stating that you do NOT consider and empty item, i.e., , , as an 
// item towards to the count.


(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.message = "";
  $scope.items = "";
  $scope.len = "";
  $scope.customStyle = {};


  $scope.showMess = function () {
     var spl_items_arr = [];
     spl_items_arr = $scope.items.split(',');

     $scope.len = spl_items_arr.length;

	if($scope.items === ""){
     	$scope.message = "Please enter data first";
     	$scope.customStyle.style = {"color":"red"};
     }
     else {
     	if($scope.len < 4){
     		$scope.message = "Enjoy!";
     		$scope.customStyle.style = {"color":"green"};
     	}
     	if($scope.len > 3){
     		$scope.message = "Too much!";
     		$scope.customStyle.style = {"color":"red"};
     		
    	 }
	}
  };
}
})();
