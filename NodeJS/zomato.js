'use strict';

const functions = require('C:\\Users\\manojp\\AppData\\Roaming\\npm\\node_modules\\firebase-functions');
const http = require('http');
//const host = 'developers.zomato.com/api/v2.1/categories';
//const ApiKey = '[d6f8dc99fe6b7cd9181251d0f8bbf86d]';
console.log("Game starts..");
exports.myFunction= functions.https.onRequest((request, response) => {
     var options = {
          host: 'developers.zomato.com',
          method: 'POST',
          path:'/api/v2.1/categories',
          headers: {
            'Content-Type': 'application/json',
            'user-key':'d6f8dc99fe6b7cd9181251d0f8bbf86d'
          }
     };
    console.log("Hello  am here");
    var req = http.response(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function(chunk) {
        bodyChunks.push(chunk);
    }).on('end', function() {
        var body = Buffer.concat(bodyChunks);
        console.log('BODY: ' + body);
        })
    });

    req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
    });

    response.send("Hello from Firebase!"); //just to send something in response.
 });