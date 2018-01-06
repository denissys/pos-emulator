'use strict'

var settings = require('./lib/util/settings.js').load('default').read();
var mqttClientBroker = require("./lib/client/mqtt/client.js").load(settings).start();
var keepAliveWorker = require("./lib/worker/keep-alive-worker.js").load(settings, mqttClientBroker).execute();