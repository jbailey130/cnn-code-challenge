'use strict';

//  SETS UP ANGULAR APP
//  TURN ON HTML5 MODE SO WE DON'T GET #

angular.module('cnnApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'cnnFilters',
    'ngAnimate',
    'ngMaterial'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    
    $locationProvider.html5Mode(true);
});
