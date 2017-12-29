/* MQTT Client Processor is responsible to publish messages */

'use strict'

var path = require('path'),
    mqtt = require("mqtt"), 
    settings = require(path.resolve('./lib/util/settings.js')).settings;

var client = mqtt.connect(settings.mqtt.protocol + settings.mqtt.addrees, {
  port: settings.mqtt.port
});

client.on("connect", function() {
  console.log("client is connected");
})

client.on("reconnect", function() {
  console.log("client is reconnected");
})

client.on("error", function(err) {
  console.log("error from client --> ", err);
})

client.on("close", function() {
    console.log("client is closed");
})

client.on("offline", function(err) {
  console.log("client is offline");
});

function execute() {
  try {
    var message = {'status':'live', 'id': '123', 'timestamp': new Date().getTime()};
    var qosConfig = { 'retain': settings.mqtt.qos.retain, 'qos': settings.mqtt.qos.level };

    client.publish(settings.mqtt.topic, JSON.stringify(message), qosConfig, function(err) {
      if (err) {
        console.log('error to publish --> ' + err);
      } else {
        console.log('publushed message --> ' + JSON.stringify(message));  
      }
    });    
  } catch(e) {
    console.log('Unexpected exception on publish --> ' + e);
  }
}

module.exports.execute = execute;