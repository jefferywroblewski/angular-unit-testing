/**
 * Created by Dad on 4/29/2016.
 */
angular
  .module('products')
  .controller('ProductsController', ProductsController);

function ProductsController($scope, ProductsService) {
  $scope.products = [];
  $scope.load = load;

  function load() {
    $scope.products = ProductsService.getProducts();
  }
}