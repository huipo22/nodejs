/**
 * Created by huipo on 17-3-6.
 */
/**
 * Created by huipo on 17-3-6.
 */
var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    util = require('util'),
    querystring = require('querystring'),
    formidable = require('formidable'); //上传模块

var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname; //获取客户端的请求路径
    if (pathname == '/index') {
        var pageContent = fs.readFile('index.html', 'utf-8', function (err, data) {
            if (err) {
                //如果有错误则执行的事件
                console.log('Server.error:101');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        })
    } else if (pathname == '/post') {
        var form = new formidable.IncomingForm();
        form.uploadDir = './temp';
        //错误，表单内容，附件
        form.parse(req, function (err, fields, files) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            var path = files.file.path;
            console.log(files);
            //改名字
            fs.rename(files.file.path, './temp/1.jpg');
            res.end();
        })
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('error:404');
        console.log('error')
    }
});
server.listen(8888);
console.log('@http://127.0.0.1:8888');