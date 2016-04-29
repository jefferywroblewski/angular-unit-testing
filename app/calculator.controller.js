/**
 * Created by Dad on 4/28/2016.
 */
angular
  .module('calculatorApp')
  .controller('CalculatorController', CalculatorController);

function CalculatorController($scope) {
  $scope.z = 0;
  $scope.sum = sum;
  $scope.subtract = subtract;
  $scope.divide = divide;

  function sum() {
    $scope.z = $scope.x + $scope.y;
  }

  function subtract() {
    $scope.z = $scope.x - $scope.y;
  }

  function divide() {
    $scope.z = ($scope.y === 0) ? 0 : $scope.x / $scope.y;
  }
}
