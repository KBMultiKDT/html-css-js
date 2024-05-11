import {generateLotteryNumbers, generateRandomNumber} from "./lotto.js";
import {generateMyAnswers, generateAnswers, gradeToeic} from "./toeic.js";
// 복권번호 생성
const lotteryNumbers = generateLotteryNumbers();

// 전체 복권 정보 출력
console.log("복권번호:", lotteryNumbers);

console.log('-------------------------------');
// toeic 채점 및 점수 출력
// toeic 답안과 내답안을 생성
const toeicAnswers = generateAnswers();
const myToeicAnswers = generateMyAnswers();
const score = gradeToeic(toeicAnswers, myToeicAnswers);
console.log(`TOEIC 점수: ${score}점`);
console.log('-------------------------------');

