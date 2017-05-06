/**
 * Created by huipo on 17-5-6.
 */
var fs = require('fs');

//耗费时间
fs.readFile('./io.js', 'utf8', (error, data) => {
    "use strict";
    if (error) {
        throw error
    }
    console.log(data)
})