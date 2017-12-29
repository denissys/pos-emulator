var path = require('path'),
    mqttProcessor = require('./mqtt-client-broker-processor.js'),
    settings = require(path.resolve('./lib/util/settings.js')).settings;

// Start publish the keep alive status during alltime of app
function execute() {
  setInterval(mqttProcessor.execute, settings.pos.publishState.timeInMs);
}

module.exports.execute = execute;
