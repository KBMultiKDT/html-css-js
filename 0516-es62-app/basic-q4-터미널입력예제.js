// 새로운 인터페이스 생성
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin, // 표준 입력 스트림 사용
    output: process.stdout // 표준 출력 스트림 사용
});

// 사용자에게 메시지를 출력하고 입력을 기다림
rl.question('이름을 입력하세요: ', (name) => {
    console.log(`안녕하세요, ${name}님!`);
    rl.close(); // readline 인터페이스 종료
});