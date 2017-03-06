/**
 * Created by huipo on 17-3-6.
 */
var crypto = require('crypto');
var md5 = crypto.createHash('md5');
var password = 'wos';
md5.update(password);
// var d = md5.digest('md5');
var d = md5.digest('sha1');
console.log(d)