'use strict';

//  THE DIRECTIVE FOR ALL OF THE TWEETS BEING DISPLAYED
//  DI THE TWITTER SERVICE AS WELL AS $window
angular.module('cnnApp')
    .directive('twitterCard', ['TwitterService', '$window',  function(TwitterService, $window){
        return{
            restrict: 'E',
            scope:{
                q: '@', //  QUERY FOR SEARCHING FEEDS
                f: '='  //  QUERY FEEDS BASED ON A FROM
            },
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

                function sanitizeText(data){

                    //  HASHTAGS
                    var exp =/\S*#(?:\[[^\]]+\]|\S+)/g;
                    var matches = data.text.match(exp);

                    //  CANNOT USE UI-SREF IN SIDE A FILTER WHEN CALLED FROM A DIRECTIVE
                    //  HAVE TO CHANGE THE STATE TO USE A QUERYSTRING INSTEAD
                    if(matches){
                        data.hashtags = [];
                        for(var i = 0; i < matches.length; i++){
                            data.text = data.text.replace(matches[i],'<a href="hashtags?tags=' + matches[i].replace('#', '') + '">' + matches[i] + '</a>');
                        }
                    }

                    //  URLS
                    exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
                    var links = data.text.match(exp);
                    if(links){
                        data.article_link = links[0] || '';
                        data.tweet_link = links[1] || '';
                    }

                    exp =/\S*@(?:\[[^\]]+\]|\S+)/g;
                    matches = data.text.match(exp);

                    //  CANNOT USE UI-SREF IN SIDE A FILTER WHEN CALLED FROM A DIRECTIVE
                    //  HAVE TO CHANGE THE STATE TO USE A QUERYSTRING INSTEAD
                    if(matches){
                        data.at_name = [];
                        for(var i = 0; i < matches.length; i++){
                            data.at_name.push(data.text.replace(matches[i],'<a href="names?name=' + matches[i] + '">' + matches[i] + '</a>'));
                        }
                    }

                    return data;
                }

                $scope.tweets = [];
                //  CALL TWITTER SERVICE GETTING ALL OF THE TWEETS FROM:CNN
                if(attrs.q){
                    TwitterService.queryFeedSearch(attrs.q).then(function(data){
                        for(var i = 0; i < data.length; i++){
                            data[i] = sanitizeText(data[i]);
                        }

                        $scope.tweets = chunk(data, 4);
                    });
                }
                if(attrs.f){
                    TwitterService.queryFeedFrom(attrs.f).then(function(data){
                        for(var i = 0; i < data.length; i++){
                            data[i] = sanitizeText(data[i]);
                        }
                        $scope.tweets = chunk(data, 4);
                    });
                }

                //  CONTROLS THE TWO LINKS IN EACH CARD TO OPEN LINK IN NEW WINDOW
                $scope.go = function(link){
                    $window.open(link, '_blank');
                };


            }
        }
    }]);
