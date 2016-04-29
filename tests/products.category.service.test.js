/**
 * Created by Dad on 4/28/2016.
 */
describe('products CategoryService', function() {
  it('should return the expected categories', function() {
    angular.mock.module('products');

    var service;

    angular.mock.inject(function GetDependencies(CategoryService) {
      service = CategoryService;
    });

    var categories = service.getCategories();

    expect(categories).toEqual({ 1: 'Beverages', 2: 'Condiments' });
  });
});