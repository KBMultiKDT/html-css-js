// 블로킹 I/O
// Node.js에서 동기 처리하기

const fs = require("fs");

let data = fs.readFileSync("./example.txt", "utf-8");
console.log(data);

console.log("코드 끝!");

//
//블로킹 I/O 관점:
//코드는 파일을 읽는 동안 프로그램이 다른 작업을 수행하지 못하도록 블로킹됩니다.
//fs.readFileSync()은 파일을 읽을 때까지 프로그램이 기다리며, 이 동안 다른 코드가 실행되지 않습니다.
// 따라서 fs.readFileSync() 이후의 console.log("이걸 보고 싶은 거였어!");는 파일을 읽고 나서야 실행됩니다.
// 즉, 파일 읽기 작업이 완료되기 전에는 다음 코드가 실행되지 않습니다.
