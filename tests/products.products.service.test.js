/**
 * Created by Dad on 4/28/2016.
 */
describe('products ProductsService', function() {
  beforeEach(angular.mock.module('products'));

  it('should append category names to products', function() {
    angular.mock.module({
      'CategoryService': {
        getCategories: function() {
          return { 1: 'Electronics', 2: 'DVDs' };
        }
      }
    });

    var service;

    angular.mock.inject(function GetDependencies(ProductsService) {
      service = ProductsService;
    });

    var products = service.getProducts();
    expect(products[0].categoryName).toBe('Electronics');
    expect(products[1].categoryName).toBe('DVDs');
  });
});