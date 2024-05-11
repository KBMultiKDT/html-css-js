import fs from 'fs';

// 파일 경로
const filePath = 'me.txt';

// 파일을 utf-8 인코딩으로 동기적으로 읽어오기
try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    console.log("파일 내용:");
    console.log(fileContent);
} catch (err) {
    console.error("파일을 읽어오는 동안 오류 발생:", err);
}


//////////////////////////////////////////////
//import fs from 'fs';

// 읽을 파일 경로
const readFilePath = 'me.txt';
// 쓸 파일 경로
const writeFilePath = 'you.txt';
// 추가할 내용
const additionalContent = "\n************************\n나는 별이야\n제일 빛나\n************************";

// me.txt 파일이 존재하는지 체크
const fileExists = fs.existsSync(readFilePath);

if (fileExists) {
    // 파일이 존재하면 utf-8 인코딩으로 동기적으로 파일을 읽어옴
    try {
        const fileContent = fs.readFileSync(readFilePath, 'utf-8');
        console.log("파일 내용:");
        console.log(fileContent);

        // 새로운 파일에 읽은 내용 저장
        fs.writeFileSync(writeFilePath, fileContent);
        console.log(`파일 ${writeFilePath}에 내용 저장 완료.`);

        // 추가 내용을 새로운 파일에 추가
        fs.appendFileSync(writeFilePath, additionalContent);
        console.log("추가 내용을 새로운 파일에 추가 완료.");

        // 터미널에 새로운 파일 내용 프린트
        const newFileContent = fs.readFileSync(writeFilePath, 'utf-8');
        console.log("새로운 파일 내용:");
        console.log(newFileContent);
    } catch (err) {
        console.error("파일 처리 도중 오류 발생:", err);
    }
} else {
    console.error("읽을 파일이 존재하지 않습니다.");
}
