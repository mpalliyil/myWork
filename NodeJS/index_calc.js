'use strict';
var https = require('http');
var query = "what is the capital of karnataka";
query = query.replace(/ /g,"+");
const param="/v1/result?appid=T3HERW-24TU6TX5LV&i=";
const askWolframe=param.concat(query);
console.log("New String" + askWolframe);

var options = {
    host: 'api.wolframalpha.com',
    method: 'POST',
    path:query,
    headers: {
      'Content-Type': 'application/json',
      //'appid':'T3HERW-24TU6TX5LV',
      //'i': 'what is the fastest animal'
    }
};

https.get(options, function (res) {
    var json = '';
    var bodyChunks = [];
    res.on('data', function (chunk) {
        bodyChunks.push(chunk);
        //json += chunk;
    });
    res.on('end', function () {
        console.log("URL"+options.path);
        if (res.statusCode === 200) {
            try {
                var body = Buffer.concat(bodyChunks);
                console.log('BODY: ' + body);
                //var data = JSON.parse(json);
                // data is available here:
                //console.log("Yes got it "+body.toString);
            } catch (e) {
                console.log('Error parsing JSON!');
            }
        } else {
            console.log('Status:', res.statusCode);
        }
    });
}).on('error', function (err) {
      console.log('Error:', err);
});