'use strict';

angular.module('cnnApp')
  .controller('HashtagCtrl',[ '$scope', '$state', '$stateParams',  function ($scope, $state,$stateParams) {
      //    GET THE STATE PARAM FOR THE HASHTAG AND USE IT TO RINSE AND REPEAT
      $scope.hashtag = $stateParams.tag;
}]);