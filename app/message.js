/**
 * Created by mlennox on 03/11/2016.
 */

var app = require('./start');

// crappy self-invoker for the moment...
(function() {

    app.rtm.on(app.rtm_events.MESSAGE, function(message) {
        console.log('message received: ', message);
    });

}());