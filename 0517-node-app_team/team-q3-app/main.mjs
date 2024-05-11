import fs from 'fs';

// movie.txt 파일을 읽어와서 출력하는 함수
function printMovie() {
    const filePath = 'movie.txt';
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        console.log(`보고 싶은 영화는 ${fileContent}입니다.`);
    } catch (err) {
        console.error(`파일을 읽어오는 동안 오류 발생: ${err}`);
    }
}

// tour.txt 파일을 읽어와서 출력하는 함수
function printTour() {
    const filePath = 'tour.txt';
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        console.log(`가고 싶은 여행지는 ${fileContent}입니다.`);
    } catch (err) {
        console.error(`파일을 읽어오는 동안 오류 발생: ${err}`);
    }
}

// 함수 호출
printMovie();
printTour();
