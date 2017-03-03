/**
 * Created by huipo on 17-3-3.
 */
var net = require('net'); //引入net模块
var ChatServer = net.createServer();//net.createServer()方法  建立一个服务器

clientList = [];
// 服务端监听 'connection' 连接 方法
ChatServer.on('connection', function (client) { //client 就是客户端
    clientList.push(client);
    client.write('Welcome to huipo chat server ....  \n'); //client.write()  向客户端输出
    // client.write('This server building...  \n');
    // client.end();//end()关闭客户端连接

    //客户端监听 'data' 方法
    client.on('data', function (data) {
        // console.log(data.toString());
        for (var i = 0; i < clientList.length; i++) {
            if (client != clientList[i]) {
                clientList[i].write(data)
            }
        }
    })
})
ChatServer.listen(9000);