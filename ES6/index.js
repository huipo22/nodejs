/**
 * Created by huipo on 17-6-22.
 */
/*
 * 字符串扩展
 * */
// let hu = '胡辉波';
// let blog = `<!--本质上，这种写法属于“模式匹配”，<br/>只要等号两边的模式相同，左边的变量就会被赋予对应的值。<br/>下面是一些使用嵌套数组进行解构的例子。<br/>-->${hu}`
// document.write(blog);
/*
 * 查找方法 includes => boolean
 *        startsWith => boolean
 *        endsWith => boolean
 * 复制字符串
 *      'str'.repeat(2)
 * */
// console.log(blog.startsWith(hu));
// document.write(blog.repeat(4))

/*
 * 数值扩展
 * */

// json 数据格式
// let json = {
//     '0':'json1',
//     '1':'json2',
//     '2':'json3',
//     lenght:3
// }
// let arr=Array.form(json);
// console.log(arr);

// for(var i=0;i<5;i++){
//     (function(j){
//         setTimeout(function(){
//             console.log(new Date,j)
//         },1000)
//     })(i)
// }
// console.log(new Date,i)
// for(var i=0;i<5;i++){
//     setTimeout(function(j) {
//         console.log(new Date,j)
//     }, 1000,i);
// }
// console.log(new Date,i)
// function output(j){
//     setTimeout(function(){
//         console.log(new Date,j)
//     },1000)
// }
// for(var i=0;i<5;i++){
//     output(i)
// }
// console.log(new Date,i)
const tasks=[];
const output = (i) =>new Promise((resolve)=>{
    setTimeout(function() {
        console.log(new Date,i);
        resolve()
    }, 1000*i);
})
for(var i=0;i<5;i++){
    tasks.push(output(i))
}
Promise.all(tasks).then(()=>{
    setTimeout(()=>{
        console.log(new Date,i)
    },1000)
})