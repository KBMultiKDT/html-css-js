const p = new Promise((resolve, reject) => {
    console.log("Promise를 시작합니다.");
    resolve("너의 이름은?");
})

p.then((msg) => {
    console.log(`1 ==> ${msg}`);
    return "홍길동";
})
.then((msg) => {
    console.log(`2 ==> ${msg}`);
    console.log("네가 가고 싶은 곳은?");
    return `${msg}은 일본`;
})
.then((msg) => {
    console.log(`3 ==> ${msg}`);
    console.log(`${msg}을 가기를 희망한다.`);
})
.catch((error) => {
    console.log(`오류발생 ==> ${error}`);
})