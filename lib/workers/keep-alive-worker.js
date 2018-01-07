/* MQTT Client Processor is responsible to publish messages */

'use strict'

function load(settings, mqttClientBroker) {

  return {
    execute: function() {
      setInterval(statePublisher(settings, mqttClientBroker).publish, settings.client.publishState.interval.timeInMs);
    }
  }
}

function statePublisher(settings, mqttClientBroker) {

  return {
    publish: async function() {
      try {
        let clientName = settings.client.name;
        let clientId = settings.client.dispositive.id;
        let message = JSON.stringify( {'name':clientName,'id':clientId,'ts':new Date().getTime()} );
        let qosConfig = {'retain':settings.mqtt.qos.retain, 'qos':settings.mqtt.qos.level};

        mqttClientBroker.publish(settings.mqtt.topic, message, qosConfig, function(err) {
          if (err) {
            console.log('error to publish --> ' + err);
          } else {
            console.log('publushed message --> ' + message);
          }
        });    
      } catch(e) {
        console.log('Unexpected exception on publish state --> ' + e);
      }
    }
  }
}

module.exports.load = load;