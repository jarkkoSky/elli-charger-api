## Elli Charger Api

Very simple API to access features in Elli Charger admin page. Tested with Elli Id Charger Pro.

### Motivation

I have a setup where my charger measures the current flowing to my house. Basically I have:

- Elli Id Charger Pro
- 3x Shelly CA 50A

Charger uses this current information to make sure that EV charging doesn't overload my fuses.
I wanted also to use this current information to analyze my power input and since the charger already
has this data, I created a way to access it with my Home Assistant.

### Routes

```
GET /energy-meter

{
    "CT3":0.37039622664452,
    "CT1":1.1716352701187,
    "CT2":4.2814197540283,
    "powerKw":1.3393937876820494,
    "timestamp":"2025-04-19T16:52:06.637Z"
}

```

### Setup with Home Assistant

1. Clone this repo on your home assistant server
2. Make sure you have docker installed
3. Check required configuration from `env.default` and create file `.env` with correct values
4. Run `./start-docker.sh`
5. Make sure the server is running in the given port
6. In Home Assistant add restful sensor in configuration.yaml. For example:
```
  - platform: rest
    name: House Power Realtime
    resource: http://localhost:1234/energy-meter
    method: GET
    scan_interval: 10
    value_template: "{{ value_json.powerKw | round(2) }}"
    unit_of_measurement: "kW"
    json_attributes:
      - CT1
      - CT2
      - CT3
      - timestamp
``` 
