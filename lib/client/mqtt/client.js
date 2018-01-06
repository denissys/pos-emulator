/* MQTT Client */

'use strict'

var mqtt = require("mqtt");

function load(settings) {

	var client = mqtt.connect(settings.mqtt.protocol+'://'+settings.mqtt.addrees, {
	  port: settings.mqtt.port
	});

	client.on("reconnect", function() {
	  console.log("MQTT client is reconnected");
	})

	client.on("error", function(err) {
	  console.log("MQTT error from client --> ", err);
	})

	client.on("close", function() {
	    console.log("MQTT client is closed");
	})

	return {
		start: function() {
			client.on("connect", function() {
			  console.log("MQTT client is connected");
			});
			return client;
		}
		
	};
}

module.exports.load = load;