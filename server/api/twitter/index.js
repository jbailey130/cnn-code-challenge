module.exports = function (app) {

    var Twitter = require('twitter');
    //  CREATED A NEW ACCOUNT BASED APP
    //  https://apps.twitter.com/
    var client = new Twitter({
        consumer_key: 'Hm2pUBGB2Yubq9pVtMDSub8E6',
        consumer_secret: 'kX5z5Fv1nCwRO7p91aReUlyp2ckEwRc3pBu0kft5gn74ghNpMd',
        access_token_key: '64180344-jeFWlJa8vNnrza7rDkDLbSpMvVUSOXL2c3tLvxib5',
        access_token_secret: 'WUmRZkb5JowVB6U1t0ybJlFl3iLAotMC2Tv09nRVzpOPl'
    });

    // API/TWITTER/SEARCH - SEARCHES TWEETS BASED ON SOME TERM
    app.route("/api/twitter/search/:q").get(function (req, res) {
        client.get('search/tweets', {q : '#' + req.params.q} , function(error, tweets, response){
            res.send(JSON.stringify( tweets.statuses ));
        });
    });

    //  API/TWITTER/FROM - GETS TWEETS FROM A PERSON
    app.route("/api/twitter/from/:f").get(function (req, res) {
        client.get('search/tweets', { from : req.params.f }, function(error, tweets, response){
            res.send(JSON.stringify( tweets.statuses ));
        });
    });

};