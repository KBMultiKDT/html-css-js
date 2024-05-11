let obj1 = {name : "박문수", age: 29};
let obj2 = {...obj1, email : "winner@email.com"};
console.log("obj1>> " , obj1);
console.log("obj2>> " , obj2);
console.log("---------------")
obj2.age = 100;
console.log("obj1>> " , obj1);
console.log("obj2>> " , obj2);

console.log(obj1 == obj2)
