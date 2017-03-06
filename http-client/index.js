/**
 * Created by huipo on 17-3-6.
 */
var http = require('http');
var options = {
    hostname: '127.0.0.1',
    port: 8080,
    path: '/one.html',
    method: 'GET'
};
//request = 进贡 response=打赏
var req = http.request(options, function (res) {
    console.log('statusCode:' + res.statusCode);
    console.log(res.headers);
    console.log(JSON.stringify(res.headers));
    res.on('data', function (chunk) {
        console.log('BODY' + chunk);
    })
});
req.on('error', function (e) {
    console.log('error:' + e.message);
});
req.end();