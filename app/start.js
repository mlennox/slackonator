var RtmClient = require('@slack/client').RtmClient;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

var bot_token = process.env.SLACKONATOR_TOKEN || '';

console.log('start init')

var rtm = new RtmClient(bot_token);

// The client will emit an RTM.AUTHENTICATED event on successful connection, with the `rtm.start` payload if you want to cache it
rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
    console.log('Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel');
});

rtm.start();


module.exports = {
    rtm: rtm,
    client_events: CLIENT_EVENTS,
    rtm_events: RTM_EVENTS,
    bot_token: bot_token
}

