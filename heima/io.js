/**
 * Created by huipo on 17-5-6.
 */
// console.log('start...........')
// console.time('start');
// //不断循环阻塞了代码的进行
// setTimeout(() => {
//     "use strict";
//     for (var i = 0; i < 10; i++) {
//         console.log('循环完了')
//     }
// }, 0)
// console.timeEnd('start')
// console.log('end...............')

// console.time('main');
// //耗费时间（阻塞情况）
// get('', () => {
// })
// console.timeEnd('main');
// console.log('end...')

//1.如果函数需要回调参数，一定是在参数的最后出现
// function getFileAsync(path, callback) {
//     if (err) {
//         callback(new Error('xxx error'))
//     } else {
//         callback(null, data)
//     }
// }

//2.错误优先的回调函数

function isEvenOrOdd(number, callback) {
    if (typeof number === 'number') {
        if (number % 2 == 0) {
            //基数
            callback(null, '当前传入的是基数')
        } else {
            callback(null, '当前传入的是偶数')
        }
    } else {
        // throw new Error('你传入的不是数字')；
        callback(new Error('你传入的不是数字'))
    }
}

//约定将错误信息作为回调
isEvenOrOdd(10, (error, data) => {
    "use strict";
    if (error) throw error;
    console.log(data);
})