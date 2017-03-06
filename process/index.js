/**
 * Created by huipo on 17-3-6.
 */
// process.on('exit', function () {
//     setTimeout(function () {
//         console.log('not run ..')
//     },100);
//     console.log('bye....')
// })


// process.on('uncaughtException', function (err) {
//     console.log('err:' + err);
// });
// setTimeout(function () {
//     console.log('run ..')
// }, 100);
//
// abc();
//
// console.log('bye....')

// var http = require('http');
// var server = http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('hello world');
//     abc();
//     console.log('hi i am here');
// });
// process.on('uncaughtException', function (err) {
//     if (err) {
//         console.log(err);
//     }
// });
// server.listen(8888);

console.log(process.version);
console.log(process.cwd())
