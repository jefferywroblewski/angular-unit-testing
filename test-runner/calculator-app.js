/**
 * Created by Dad on 4/28/2016.
 */
angular.module('calculatorApp', []);

angular
  .module('calculatorApp')
  .controller('CalculatorController', CalculatorController);

function CalculatorController($scope) {
  $scope.z = 0;
  $scope.sum = sum;

  function sum() {
    $scope.z = $scope.x + $scope.y;
  }
}

angular.element(document).ready(function() {
  angular.bootstrap(document, ['calculatorApp']);
});
