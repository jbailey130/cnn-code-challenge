'use strict';

//  THE DIRECTIVE FOR ALL OF THE TWEETS BEING DISPLAYED
//  DI THE TWITTER SERVICE AS WELL AS $window
angular.module('cnnApp')
    .directive('twitterCard', ['TwitterService', '$window',  function(TwitterService, $window){
        return{
            restrict: 'E',
            scope:{},
            templateUrl: 'app/directives/twitterCard/twitterCard.html',
            link: function($scope, element, attrs){
                //  ALLOWS FOR PUTTING ARRAY OF SIZE N INTO COLUMNS OF SIZE X
                function chunk(arr, size) {
                    var newArr = [];
                    for (var i=0; i<arr.length; i+=size) {
                        newArr.push(arr.slice(i, i+size));
                    }
                    return newArr;
                }

                //  CALL TWITTER SERVICE GETTING ALL OF THE TWEETS FROM:CNN
                TwitterService.getFeed().then(function(data){
                     $scope.tweets = chunk(data, 4);
                });

                //  CONTROLS THE TWO LINKS IN EACH CARD TO OPEN LINK IN NEW WINDOW
                $scope.go = function(link){
                    $window.open(link, '_blank');
                };

                $scope.findTag = function(hashtag){
                    console.log(hashtag);
                };
            }
        }
    }]);
