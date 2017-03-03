/**
 * Created by huipo on 17-3-3.
 */
var net = require('net'); //引入net模块
var ChatServer = net.createServer();//net.createServer()方法  建立一个服务器

clientList = [];
// 服务端监听 'connection' 连接 方法
ChatServer.on('connection', function (client) { //client 就是客户端
    //获取ip地址和端口
    client.name = client.address().address + ':' + client.address().port;
    console.log(client.name + 'joined   \n\r');
    clientList.push(client);
    client.write('Welcome to huipo chat server ....  \n'); //client.write()  向客户端输出

    //客户端监听 'data' 方法
    client.on('data', function (data) {
        // console.log(data.toString());
        for (var i = 0; i < clientList.length; i++) {
            if (client != clientList[i]) {
                clientList[i].write(client.name + ':' + data + data.toString())
            }
        }
    });
    client.on('end', function () {
        clientList.splice(clientList.indexOf(client), 1);
    });
    client.on('error', function (e) {
        console.log(e);
    })
})
ChatServer.listen(9000);