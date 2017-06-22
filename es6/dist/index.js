"use strict";

/**
 * Created by huipo on 17-6-5.
 */
// const map=new Map();
// map.set('foo',1);
// map.set('bar',2);
// // console.log(map);
//
// function strMapToObj(strMap) {
//     let obj = Object.create(null);
//     for (let [k,v] of strMap) {
//         obj[k] = v;
//     }
//     return obj;
// }
// console.log(JSON.stringify(strMapToObj(map)));


/*
* let const var
* */
/*
for(var i=0;i<10;i++){
    console.log('循环体中：'+i);
}
console.log('循环体外:'+i);

for(let i=0;i<10;i++){
    console.log('循环体中：'+i);
}
console.log('循环体外:'+i);*/

/*
* 解构赋值
* */
// let [a,[b,d],c]=[1,[2,5],3];
// console.log(a,b,d,c);
// let [bar,foo='foo']=['bar',undefined];
// console.log(foo,bar)

/*教程中有解释*/
// let [ y = 'b',x] = ['a'];
// console.log(y,x);  //'a',undefined
//
// let foo;
// ({foo}={foo:"huhuibo"});// () 是必须的
// console.log(foo);

/*
扩展运算符 ... rest
* */
function rr() {
    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
    }

    console.log(arg);
}
// rr(1,2,3,4)

var arr1 = [1, 2, 3];
// let arr2=arr1;
var arr2 = [].concat(arr1); //相等于深拷贝
arr2.push(6);
// console.log(arr1);
// console.warn(arr2);

function hu(first) {
    for (var _len2 = arguments.length, arg = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        arg[_key2 - 1] = arguments[_key2];
    }

    // console.log(arg);
    // for(let i=0;i<arg.length;i++){
    //     console.log(arg[i])
    // }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
hu(0, 1, 2, 3, 4, 5, 6);
