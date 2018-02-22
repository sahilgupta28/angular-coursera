(function() {
'use strict';
var x = 'hello';
angular.module('myFirstApp',[])
.controller('myFirstController', function($scope){
$scope.name="sahil";
$scope.totalValue = 0;
$scope.displayNumber = function () {
  var temp = calculateStringLength($scope.name);
  $scope.totalValue = temp;
};
});

function calculateStringLength(string) {
  var strLen= 0;
  for (var i = 0; i < string.length; i++) {
    strLen += string.charCodeAt(i)
  }
  return strLen;
}
})();
