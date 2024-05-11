// 새로운 인터페이스 생성
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin, // 표준 입력 스트림 사용
    output: process.stdout // 표준 출력 스트림 사용
});

// 사용자에게 메시지를 출력하고 입력을 기다림
//    11,12,15,89,34
rl.question('값 5개를 입력>> ', (numbers) => {
    console.log(`입력받은 값>> ${numbers}`);

// 공백제거
    let pre_trim = numbers.trim();
    let arr = pre_trim.split(",");
    console.log("공백 제거 전 글자수 >> ", numbers.length);
    console.log("공백 제거 후 글자수 >> ", pre_trim.length);

// reduce() 메서드를 사용하여 배열 요소의 합을 구함
    const sum = arr.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue, 0));

    console.log("전체 합은 >> ", sum); // 출력: 15

// 숫자로 변환한 후, 정렬
    const intArray = arr.map(str => parseInt(str));
    intArray.sort();
    console.log(`정수변환 후 정렬된 배열>> ${intArray}`);
    console.log(`제일 큰 수와 제일 작은 수의 차는>> ${intArray[intArray.length - 1] - intArray[0]}`);
    rl.close(); // readline 인터페이스 종료
});

