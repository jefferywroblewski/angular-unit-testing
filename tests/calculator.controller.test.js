/**
 * Created by Dad on 4/28/2016.
 */
describe('CalculatorController', function() {
  beforeEach(angular.mock.module('calculatorApp'));

  var $controller;
  var $scope;
  var CalculatorController;

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  beforeEach(function() {
    $scope = {};
    CalculatorController = $controller('CalculatorController', { $scope: $scope });
  });

  describe('sum', function() {
    it('1 plus 1 should equal 2', function() {
      $scope.x = 1;
      $scope.y = 1;
      $scope.sum();
      expect($scope.z).toBe(2);
    });

    it('z should have default value of zero', function() {
      expect($scope.z).toBe(0);
    });
  });

  describe('subtract', function() {
    it('3 minus 2 should equal 1', function() {
      $scope.x = 3;
      $scope.y = 2;
      $scope.subtract();
      expect($scope.z).toBe(1);
    });
  });

  describe('divide', function() {
    it('10 divided by 5 should equal 2', function() {
      $scope.x = 10;
      $scope.y = 5;
      $scope.divide();
      expect($scope.z).toBe(2);
    });

    it('10 divided by 0 should return 0', function() {
      $scope.x = 10;
      $scope.y = 0;
      $scope.divide();
      expect($scope.z).toBe(0);
    });
  });
});