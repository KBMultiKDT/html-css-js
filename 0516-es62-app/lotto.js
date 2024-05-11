// 1에서 45까지의 랜덤한 번호를 생성하는 함수
function generateRandomNumber() {
    return Math.floor(Math.random() * 45) + 1;
}

// 중복되지 않는 복권번호 생성
function generateLotteryNumbers() {
    const lotteryNumbers = [];
    while (lotteryNumbers.length < 6) {
        const randomNumber = generateRandomNumber();
        if (!lotteryNumbers.includes(randomNumber)) {
            lotteryNumbers.push(randomNumber);
        }
    }
    return lotteryNumbers;
}

export {generateRandomNumber, generateLotteryNumbers};

