"use strict";

/**
 * Created by huipo on 17-6-5.
 */
var a = 1;
const greet = function greet() {

  console.log(a);
  let a = 2;
};
console.log(a);
greet();
