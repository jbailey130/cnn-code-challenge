# cnn-code-challenge

Installation Instructions

Pull down rep to a folder of your choosing.

Open command prompt in the folder.

Run npm install

Once this completes run 'node server/app.js' 
Without the quotes.

Assumptions - 
- The app pulls down the last fiftenn tweets from CNN using the twitter API. 
- I set the API up using self-to-application credentials.
- I created filters to remove links from the tweets and put them into buttons at the bottom of the cards. 
- I created filters to turn hashtags into links, where the user can click on it and it will execute another API call for the hashtag clicked.
- I created filters to also highlight @ names though click on them does not do anything.
- I typically use the stateProvider to swap views within my angular app. I find this easier to manage.
- I typically have very sparse controllers except for the collection and passing along of stateParams. I do this because I try to get the directives to do the majority of the work. This further isolates the code from changing something in the controller and the entire page doesn't work. Instead changes can be made to individual pieces.
- I used the Angular Material design which is not something I have used before but I really liked it because it gives a very consistent look and feel across devices.

Other functionality I would have liked to add:
- Searching
- Viewing tweets based on @ names (like I did with hash tags)
- Marking items as viewed and then pulling in another item to replace it
- The base functionality of retweeting, direct messaging, starring, and other basic curation of tweets.
