'use strict';

angular.module('cnnApp').factory('TwitterService', [
    '$http', function ($http) {
        var factory = [];

        //  GETS ALL THE FEEDS FROM:CNN
        var _getFeed = function () {
            return $http.get('/api/twitter').then(function (response) {
                return response.data;
            });
        };

        factory.getFeed = _getFeed;

        return factory;
    }
]);