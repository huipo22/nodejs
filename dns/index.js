/**
 * Created by huipo on 17-3-6.
 */
//resolve()  --决定 域名转换成ip (dns)的记录
//reverse()  --颠倒 ip转换成域名 lookup

var dns = require('dns');
// dns.resolve('www.baidu.com','A',function (err,res) {
//     if(err){
//         throw err;
//     }
//     console.log(res);
// });
// dns.lookup('www.baidu.com','4',function (err,res) {
//     if(err){
//         throw err;
//     }
//     console.log(res);
// });
dns.resolve('10.20.22.131',function (err,res) {
    if(err){
        throw err;
    }
    console.log(res);
});