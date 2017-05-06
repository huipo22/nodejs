/**
 * Created by huipo on 17-5-6.
 */
var q = '请输入用户名：';
var isInputUserName = false;
var username = ''
var users = {
    'admin': '123',
    'user1': '321',
    'user2': '456'
};
process.stdout.write(q + '\n');
process.stdin.on('data', (input) => {
    "use strict";
    //input 是流（二进制）
    input = input.toString().trim();
    if (!username) {
        if (Object.keys(users).indexOf(input) === -1) {
            process.stdout.write('用户不存在' + '\n');
            process.stdout.write('请输入用户名' + '\n');
            isInputUserName = true;
        } else {
            // cunzai
            // isInputUserName = false;
            process.stdout.write('请输入密码' + '\n');
            username = input;
            // console.log('cunzai')
        }
    } else {
        //传入的是密码，拿不到上次的输入，
        if (input === users[username]) {
            console.log('login success')
        } else {
            process.stdout.write('请输入密码' + '\n');
        }
    }
});
