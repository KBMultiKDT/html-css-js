import fs from 'fs';
import readline from 'readline';

// 가고 싶은 여행지 입력을 받는 함수
export function promptTourInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('가고 싶은 여행지 입력: ', (tour) => {
        // 입력한 데이터를 파일에 저장
        saveTourToFile(tour);
        rl.close();
    });
}

// 입력한 데이터를 파일에 저장하는 함수
function saveTourToFile(tour) {
    const filePath = 'tour.txt';

    // 파일이 존재하지 않으면 생성하여 저장
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, tour);
        console.log(`"${tour}" 여행지를 저장했습니다.`);
    } else {
        console.log(`"${filePath}" 파일이 이미 존재합니다.`);
    }
}

// 함수 호출
promptTourInput();
