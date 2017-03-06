/**
 * Created by huipo on 17-3-6.
 */
var fs = require('fs');
var exec = require('child_process').exec;
//读取文件
// var data = fs.readFileSync('data.txt', 'utf-8');
// console.log(data);
//复制文件
// exec("copy data.txt data2.txt");
//修改文件名
// fs.rename('data.txt', 'del.txt');
//删除文件
// fs.unlink('data.txt');
//修改文件内容
fs.open('day.txt', 'a', function (err, fd) {
    if (err) {
        throw err;
    }
    var data = '789456123';
    fs.write(fd, data, function (err, bytesWritten, buffer) {
        console.log(bytesWritten); //多少字节
        console.log(buffer); //内容
        fs.close(fd, function (err) {
            if (err) {
                throw err;
            }
            console.log('file closed')
        });
    })
})