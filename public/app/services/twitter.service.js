'use strict';

angular.module('cnnApp').factory('TwitterService', [
    '$http', function ($http) {
        var factory = [];

        //  GETS ALL THE FEEDS FROM:CNN
        //  DEPRECATED USED TO BEGIN THE PROJECT
        var _getFeed = function () {
            return $http.get('/api/twitter').then(function (response) {
                return response.data;
            });
        };

        //  PROPER WAY TO USE THE SERVICE
        //  Q = IS SOME QUERY VALUE FOR THE TWITTER API
        var _queryFeedSearch = function (q) {
            return $http.get('/api/twitter/search/' + q).then(function (response) {
                return response.data;
            });
        };

        var _queryFeedFrom = function (f) {
            return $http.get('/api/twitter/from/' + f).then(function (response) {
                return response.data;
            });
        };


        factory.getFeed = _getFeed;
        factory.queryFeedSearch =_queryFeedSearch;
        factory.queryFeedFrom = _queryFeedFrom
        return factory;
    }
]);