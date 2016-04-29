/**
 * Created by Dad on 4/28/2016.
 */
angular
  .module('products')
  .service('CategoryService', CategoryService);

function CategoryService() {
  return {
    getCategories: getCategories
  };

  function getCategories() {
    return { 1: 'Beverages', 2: 'Condiments' };
  }
}