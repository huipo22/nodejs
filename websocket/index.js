/**
 * Created by huipo on 17-3-6.
 */
var io = require('socket.io');
var socket = io.listen('8080');
socket.on('connection', function (client) {
    console.log('有一个客户端连接');
    client.send('welcome');
})