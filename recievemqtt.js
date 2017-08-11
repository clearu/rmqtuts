var mqtt = require('mqtt');
var mysql = require('mysql');
var url  = 'mqtt://localhost:1883';

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'temp'
});

var payloadr;

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

var client = mqtt.connect(url, { clientId: 'mqtt-sub-', clean: false });

client.on('connect', function () {
  client.subscribe('airasoul', { qos: 1 });
});

client.on('message', function (topic, message) {
  console.log('received message ',  message.toString());
  payloadr = JSON.parse(message);

  connection.query({
    sql: 'INSERT INTO temptest (temp,device_id) VALUES (?,?)',
    //timeout: 40000, // 40s
    values: [payloadr.temp1, payloadr.device_id]
  }, function (error, results, fields) {
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });


});
