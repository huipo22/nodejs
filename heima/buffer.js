/**
 * Created by huipo on 17-5-11.
 */
let fs = require('fs');
let path = require('path');
//
// fs.readFile(path.join(__dirname, './process_argv.js'), (err,data) => {
//     "use strict";
//     if(err){
//         throw err
//     }else{
//         // console.log(data)
//         console.log(data.toString())
//     }
// });

// let buffer = new Buffer(4);
// buffer.write('abcdefg');
// console.log(buffer.toString());

// let buffer2 = new Buffer(4);
// buffer2.write('bvn');
// console.log(buffer2.toString());

//读取图片
fs.readFile(path.join(__dirname,'./google.png'),(error,data)=>{
    "use strict";
    console.log(data.toString('base64'))
});
//文件编码
