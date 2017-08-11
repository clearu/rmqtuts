var mqtt = require('mqtt');
var mysql = require('mysql');
var url  = 'mqtt://localhost:1883';


var payloadr;
var client = mqtt.connect(url, { clientId: 'mqtt-sub-', clean: false });

client.on('connect', function () {
  client.subscribe('airasoul', { qos: 1 });
});

client.on('message', function (topic, message) {
  console.log('received message ',  message.toString());
});





//
// var host = "192.168.1.103";
// var altHost = "http://hidden-temple-49206.herokuapp.com";
// var WebSocket = require("ws");
// var ws = new WebSocket(host, {
//   path: '/',
//   port: 8080, // default is 80
//   protocol: "echo-protocol", // websocket protocol name (default is none)
//   protocolVersion: 13, // websocket protocol version, default is 13
//   origin: 'Espruino',
//   keepAlive: 60,
//   headers: {
//   }
// });
//
// ws.on('open', function() {
//   console.log("Connected to server");
//   ws.send("esp:Connected");
// });
//
// ws.on('message', function(msg) {
//   var command = new Function(msg);
//    LoopbackB.write(command());
//   });
//
// LoopbackB.on('data',function(msg){
//  ws.send(msg);
// });
//
// setTimeout(function() {
//   LoopbackA.setConsole();
// },100);
//
//
// function postX(ip, port, obj){
// //fill in later
// }
