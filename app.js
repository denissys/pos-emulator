'use strict'

const settings = require('./lib/utils/settings.js').load('default').read(),
      mqttClientBroker = require('./lib/clients/mqtt/client.js').load(settings).start(),
      keepAliveWorker = require('./lib/workers/keep-alive-worker.js').load(settings, mqttClientBroker);

keepAliveWorker.execute();