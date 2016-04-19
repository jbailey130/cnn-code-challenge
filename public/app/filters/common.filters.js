'use strict';

angular.module('cnnFilters', ['ngSanitize'])
    .filter('articlelink', function() {
        //  THIS REMOVES THE LINKS FROM THE TWEET SO WE CAN USE THEM ON THE BUTTONS
        //  CNN IS VERY CONSISTENT.
        //  ORDINAL ZERO IS THE CNN ARTICLE
        //  ORDINAL ONE IS THE ORIGINAL TWEET
        return function(text, original) {
            var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
            var links = text.match(exp);
            var result = original == true ? links[0] : links[1];

            return result;
        }
    })
    .filter('hasgtagit', function() {
        //  THIS HIGHLIGHTS ANY HASTAGS
        return function(text) {
            var exp =/\S*#(?:\[[^\]]+\]|\S+)/g;
            var matches = text.match(exp);

            //  CANNOT USE UI-SREF IN SIDE A FILTER WHEN CALLED FROM A DIRECTIVE
            //  HAVE TO CHANGE THE STATE TO USE A QUERYSTRING INSTEAD
            if(matches){
                for(var i = 0; i < matches.length; i++){
                    text = text.replace(matches[i],'<a href="hashtags?tags=' + matches[i].replace('#', '') + '">hashtags</a>');
                }
            }
            return text;
        }
    })
    .filter('atnameit', function() {
        //  THIS HIGHLIGHTS ANY HASTAGS
        return function(text) {
            var exp =/\S*@(?:\[[^\]]+\]|\S+)/g;
            var matches = text.match(exp);

            //  CANNOT USE UI-SREF IN SIDE A FILTER WHEN CALLED FROM A DIRECTIVE
            //  HAVE TO CHANGE THE STATE TO USE A QUERYSTRING INSTEAD
            if(matches){
                for(var i = 0; i < matches.length; i++){
                    text = text.replace(matches[i],'<a href="names?name=' + matches[i].replace('#', '') + '">hashtags</a>');
                }
            }
            return text;
        }
    })
    .filter('removelinks', function() {
        //  REMOVES THE LINKS FROM THE TWEET
        return function(text) {
            var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
            return text.replace(exp,"");
        }
    })
;

