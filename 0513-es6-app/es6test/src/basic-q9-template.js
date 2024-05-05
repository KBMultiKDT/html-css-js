const d1 = new Date();
let name = "홍길동";
let product = "갤럭시s7";
let price = 199000;

console.log(`${name}님에게 ${d1.getFullYear()}년 ${d1.getMonth() + 1}월 ${d1.getDate()}일에 연락했다.`);
console.log(`${product}의 가격은 ${price.toLocaleString()}원 입니다.`);
