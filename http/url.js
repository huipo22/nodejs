/**
 * Created by huipo on 17-3-3.
 */
//url 解析
var http = require('http');
var url = require('url');
var util = require('util');
var server = http.createServer(function (req, res) {
    console.log(url.parse(req.url).pathname)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(util.inspect(url.parse(req.url))+'\n');
    res.write(url.parse(req.url).pathname);
    res.end();//响应要有结束
});
server.listen(8889);
console.log('url check')