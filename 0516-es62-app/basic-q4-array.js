
// 새로운 인터페이스 생성
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin, // 표준 입력 스트림 사용
    output: process.stdout // 표준 출력 스트림 사용
});

// 사용자에게 메시지를 출력하고 입력을 기다림
//맑음,흐림,흐림,보통,보통,흐림
rl.question('일주일간 날씨를 입력하세요.>>  ', (data) => {

    console.log(`전체 날씨 출력>> ${data}!`);
    let arr_data = data.split(",");
    console.log(arr_data)
    let count_map = new Map();
    for (let one of arr_data){
        console.log("one>> ", one);
        console.log("has(key)>> ", count_map.has(one));
        if (count_map.has(one)){
            count_map.set(one, count_map.get(one) + 1);
        }else {
            count_map.set(one, 1);
        }
    }
    for (const key of count_map.keys()) {
        console.log(`${key} - ${count_map.get(key)}`);
    }
    rl.close(); // readline 인터페이스 종료
});