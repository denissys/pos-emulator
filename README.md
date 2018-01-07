# client-emulator

Client Emulator is a simple application to test the publishing of keep-alive state of one dispositive, using:
- mqtt (http://mqtt.org/)

## Installation

Install via git clone:

```bash
git clone https://github.com/denissys/client-emulator
cd client-emulator
npm install
```

## Pre-requirements

You need install: 
- mqtt

## Run

```bash
npm start
```

## Configuration

All confs are on directory: ./config/config.yml
- Let's see the main confs:

```yaml
default:
  mqtt:
    protocol: MQTT or TCP
    addrees: Use localhost or server address
    port: Port Number, example 1883 to default installation
    topic: Name of topic to publish messages
    qos:
      level: 0 = guarantees a best effort delivery
             1 = guaranteed that a message will be delivered
             2 = guarantees that each message is received only once by the counterpart
      retain: true = retained messages received and queued messages and if the total exceeds 
                     autosave_interval then the in-memory database will be saved to disk
              false = will save the in-memory database to disk by treating autosave_interval 
                      as a time in seconds
  client:
    name: Type of dispositive to emulte, example: app_seller, app_client, iot_printer
    dispositive:
        id: ID of client to turn the dispositive unique
    publishState:
      interval:
        timeInMs: Time of interval to publish keep-alive state on MQTT
```
