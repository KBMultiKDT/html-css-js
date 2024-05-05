/* 방법1) bind()를 사용
var obj = { result: 0 };

obj.add = function(x, y) {
    function inner() {
        this.result = x + y; // self를 사용하여 obj 객체에 접근
    }
    inner = inner.bind(this);
    inner();
};

obj.add(3, 4);

console.log(obj);
console.log(obj.result); // result 속성을 obj로 직접 접근
*/


/* 방법2) 화살표 함수를 사용
var obj = { result: 0 };

obj.add = function(x, y) {
    const inner = () =>  {
        this.result = x + y; // self를 사용하여 obj 객체에 접근
    }
    inner();
};

obj.add(3, 4);

console.log(obj);
console.log(obj.result); // result 속성을 obj로 직접 접근
*/

/* 방법3) obj 객체를 직접 참조 --> 참조한 변수를 사용하여 obj객체에 접근
var obj = { result: 0 };

obj.add = function(x, y) {
    var self = this; // obj 객체를 직접 참조
    function inner() {
        self.result = x + y; // self를 사용하여 obj 객체에 접근
    }
    inner();
};

obj.add(3, 4);

console.log(obj);
console.log(obj.result); // result 속성을 obj로 직접 접근
*/