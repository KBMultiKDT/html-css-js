"use strict";

/*
const test1 = function(a, b) {
    return a + b;
}

function test2(params) {
   console.log(params + "님 환영합니다.!");
}

function test3() {
    return "OK";
}
*/

var test1 = function test1(a, b) {
  return a + b;
};
var test2 = function test2(params) {
  console.log(params + "님 환영합니다.!");
};
var test3 = function test3() {
  return "OK";
};
console.log(test1);
test2("hong");
console.log(test3());