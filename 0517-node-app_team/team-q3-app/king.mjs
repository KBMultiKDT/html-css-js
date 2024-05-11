import fs from 'fs';
import readline from 'readline';

// 보고 싶은 영화 입력을 받는 함수
export function promptMovieInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('보고 싶은 영화 입력: ', (movie) => {
        // 입력한 데이터를 파일에 저장
        saveMovieToFile(movie);
        rl.close();
    });
}

// 입력한 데이터를 파일에 저장하는 함수
function saveMovieToFile(movie) {
    const filePath = 'movie.txt';

    // 파일이 존재하지 않으면 생성하여 저장
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, movie);
        console.log(`"${movie}" 영화를 저장했습니다.`);
    } else {
        console.log(`"${filePath}" 파일이 이미 존재합니다.`);
    }
}

// 함수 호출
promptMovieInput();
