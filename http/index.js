/**
 * Created by huipo on 17-3-3.
 */
var http = require('http');
var fs = require('fs');//读取硬盘中的文件
var url = require('url');
var util = require('util');

FILE = '/media/huipo/0006CDD3000CCCD7/nodejs/http';
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});//mime
    urlText = FILE + url.parse(req.url).pathname;
    console.log(urlText);
    if (url.parse(req.url).pathname != '/favicon.ico') {
        // var data = fs.readFileSync('one.html', 'utf-8'); //读文件
        var data = fs.readFileSync(urlText, 'utf-8'); //读文件
        res.write(data);//写文件
        res.end('Hello World!\n');
    }

}).listen(9800, '127.0.0.1');
console.log('server running at http://localhost:9800');