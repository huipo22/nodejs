// process.stdout.write('hello world'+'\n');

// var log = (msg) => {
//     process.stdout.write(`${msg}\n`);
// }
// log('444444444444')


var fps = 70;
var frames = [];
frames[frames.length] = `(ｂ_ｄ) 戴了副眼镜 (*^＠^*) 乖～还含个奶嘴哦`;
frames[frames.length] = `(？o？) 喔？ (☆＿☆) 眼睛一亮 (*^〔^*) 羞羞脸`;
frames[frames.length] = `ゃōゃ ⊙▂⊙　⊙０⊙　⊙＾⊙　⊙ω⊙　⊙﹏⊙　⊙△⊙　⊙▽⊙`;

var current = 0;
var render = () => {
    // var height = process.stdout.getWindowSize()[1];
    // for (var i = 0; i < height; i++) {
    //     process.stdout.write('\n');
    // }
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');
    if (current === frames.length) {
        current = 0;
    };
    process.stdout.write(frames[current++]);
};

setInterval(render, 1000 / fps);
// var size = process.stdout.getWindowSize();
// console.log(size);

// var fs=require('fs');
// var fps = 70;
// var frames = [];
// for (var i = 1; i < 7; i++) {
//     frames[frames.length] = fs.readFileSync('./frames/${i}.txt'.options)
// }
//
// var current = 0;
// var render = () => {
//     // var height = process.stdout.getWindowSize()[1];
//     // for (var i = 0; i < height; i++) {
//     //     process.stdout.write('\n');
//     // }
//     process.stdout.write('\033[2J');
//     process.stdout.write('\033[0f');
//     if (current === frames.length) {
//         current = 0;
//     };
//     process.stdout.write(frames[current++]);
// };
//
// setInterval(render, 1000 / fps)