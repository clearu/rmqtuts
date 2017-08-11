var mqtt = require('mqtt');
var url  = 'mqtt://localhost:1883';

var payload = {
  temp1:197,
  device_id:'merc'
};

var client = mqtt.connect(url);

client.on('connect', function () {
  client.publish('airasoul', JSON.stringify(payload), { qos: 1 }, function() {
    client.end();
    process.exit();
  });
});
