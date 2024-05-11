// toeic 답안을 생성하는 함수
function generateAnswers() {
    const answers = [];
    for (let i = 0; i < 1000; i++) {
        answers.push(Math.floor(Math.random() * 4) + 1);
    }
    return answers;
}

// toeic 내답안을 생성하는 함수
function generateMyAnswers() {
    const myAnswers = [];
    for (let i = 0; i < 1000; i++) {
        myAnswers.push(Math.floor(Math.random() * 4) + 1);
    }
    return myAnswers;
}

// 채점 함수
function gradeToeic(answers, myAnswers) {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === myAnswers[i]) {
            score++;
            console.log(i + ">> " + answers[i]  +" " + myAnswers[i] + " --> 정답");
        }else{
            console.log(i + ">> " + answers[i]  +" " + myAnswers[i] + " --> 오답");
        }
    }
    return score;
}

export {generateAnswers, gradeToeic, generateMyAnswers};
