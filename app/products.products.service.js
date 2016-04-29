/**
 * Created by Dad on 4/28/2016.
 */
angular
  .module('products')
  .service('ProductsService', ProductsService);

function ProductsService(CategoryService) {
  return {
    getProducts: getProducts
  };

  function getProducts() {
    var product1 = { name: 'Chai', categoryId: 1 };
    var product2 = { name: 'Aniseed Syrup', categoryId: 2 };
    var products = [product1, product2];

    var categories = CategoryService.getCategories();

    products.forEach(function(p) {
      p.categoryName = categories[p.categoryId];
    });

    return products;
  }
}