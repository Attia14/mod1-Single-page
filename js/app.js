(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  //$scope.mytext = "";
  //$scope.myMessage = "";
  $scope.displayMessage = function () {

  var words = $scope.mytext.split(",");
  //console.log(words[3]);
  //console.log(words.length);

  if (words.length < 4) {
    $scope.myMessage = "Enjoy!"
  } else {
    $scope.myMessage = "Too Much!"
  }

};
//$scope.mytext = "Hello";
  //console.log(text);
}

})();
