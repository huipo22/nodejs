var argvs = process.argv.slice(2);
console.log(argvs);
switch (argvs[0]) {
    case 'init':
        console.log('init');
        break;
    case 'install':
        console.log('install');
        break;
    case 'bootstrap':
        console.log('bootstrap');
        break;
}