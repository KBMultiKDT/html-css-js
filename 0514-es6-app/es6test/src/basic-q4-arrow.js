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

const test1 = (a, b) => a + b;

const test2 = params => {
    console.log(params + "님 환영합니다.!");
};

const test3 = () => "OK";

console.log(test1(100, 200));
test2("hong");
console.log(test3());
