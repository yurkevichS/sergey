(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'ListController as mainList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{sn}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemsController as itemsList',
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService,  $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.sn);
      }]
    }
  });

}

})();
