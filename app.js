(function() {
'use strict';
var x = 'hello';
angular.module('myFirstApp',[])
.controller('myFirstController', function($scope, $filter){
$scope.name="sahil";
$scope.totalValue = 0;
// $scope.displayNumber = function () {
//   var temp = calculateStringLength($scope.name);
//   $scope.totalValue = temp;
// };
$scope.upperLtr = function(){
  var upper = $filter('uppercase');
  $scope.name= upper($scope.name);
}
});

// function calculateStringLength(string) {
//   var strLen= 0;
//   for (var i = 0; i < string.length; i++) {
//     strLen += string.charCodeAt(i)
//   }
//   return strLen;
// }
})();
