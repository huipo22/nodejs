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
function rr(...arg) {
    console.log(arg)
}
// rr(1,2,3,4)

let arr1=[1,2,3];
// let arr2=arr1;
let arr2=[...arr1]; //相等于深拷贝
arr2.push(6);
// console.log(arr1);
// console.warn(arr2);

function hu(first,...arg) {
    // console.log(arg);
    // for(let i=0;i<arg.length;i++){
    //     console.log(arg[i])
    // }
    for(let val of arg){
        console.log(val)
    }
}
hu(0,1,2,3,4,5,6);