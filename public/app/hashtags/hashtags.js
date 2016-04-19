'use strict';
//  STATE ROUTERS
angular.module('cnnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hashtags', {
        url: '/hashtags?tag',
        templateUrl: 'app/hashtags/hashtags.html',
        controller: 'HashtagCtrl'
    });
});