/**
 * Created by Dad on 4/29/2016.
 */
describe('ProductsController', function() {
  beforeEach(angular.mock.module('products'));

  // create anonymous module with the Object argument
  beforeEach(angular.mock.module({
    'CategoryService': {
      getCategories: function() {
        return { 1: 'Electronics', 2: 'DVDs' };
      }
    }
  }));

  // create anonymous module with function() argument
  // this can accept dependencies.
  beforeEach(angular.mock.module(function($provide) {
    $provide.service('ProductsService', function(CategoryService) {
      return {
        getProducts: function() {
          var mockCategories = CategoryService.getCategories();
          return [{ name: 'Aniseed Syrup', categoryId: 2, categoryName: mockCategories[2] }]
        }
      }
    });
  }));

  var $controller;

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('load', function() {
    it('products should be loaded to scope', function() {
      var $scope = {};
      var controller = $controller('ProductsController', { $scope: $scope } );
      $scope.load();
      expect($scope.products).toEqual([{ name: 'Aniseed Syrup', categoryId: 2, categoryName: 'DVDs' }]);
    })

  });
});