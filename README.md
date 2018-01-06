# pos-emulator

PoS (Point of Sale) Emulator is a simple application to publish a keep-alive state, using:
- mqtt

## Installation

Install via git clone:

```bash
git clone https://github.com/denissys/pos-emulator
cd pos-emulator
npm install
```

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
      level: 1
      retain: true
  pos:
    register:
      seller:
        id: ID of seller
    publishState:
      interval:
        timeInMs: Time of interval to publish keep-alive state on MQTT
```
