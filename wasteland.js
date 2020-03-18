let Twit = require('twit');
let TwitterBot = require('node-twitterbot').TwitterBot;
let WastelandBot = new TwitterBot({
  consumer_key: process.env.WASTELAND_CONSUMER_KEY,
  consumer_secret: process.env.WASTELAND_CONSUMER_SECRET,
  access_token: process.env.WASTELAND_ACCESS_TOKEN,
  access_token_secret: process.env.WASTELAND_ACCESS_TOKEN_SECRET
});

const linebreakTest =
  `FOR EZRA POUND
IL MIGLIOR FABBRO
I. The Burial of the Dead
`
WastelandBot.tweet(linebreakTest);