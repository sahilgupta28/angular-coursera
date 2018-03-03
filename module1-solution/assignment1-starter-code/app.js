(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', function($scope){
    $scope.foodItems = "";
    $scope.checkFood = function(){
      $scope.errMessage = "";
      $scope.successMessage = "";
      $scope.class = "";
      var itemsAry = $scope.foodItems.split(',');
      var count = calculateFoods(itemsAry);
      if(count == 0){
        $scope.errMessage = 'Please enter data first.';
        $scope.class = 'has-error';
      }else if(count <= 3){
        $scope.successMessage = 'Enjoy!';
        $scope.class = 'has-success';
      }else{
        $scope.successMessage = 'Too much!';
        $scope.class = 'has-success';
      }

    };
  });
})();

function calculateFoods(items){
  var count = 0;
  for (var i = 0; i < items.length; i++) {
    if(items[i] != ""){
      count++;
    }
  }
  return count;
}
