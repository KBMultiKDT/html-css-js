// 과목명과 성적 배열 정의
const subjects = ["국어", "영어", "수학", "컴퓨터", "회화"];
const semester1 = [44, 66, 22, 99, 100];
const semester2 = [...semester1]; // 1학기 성적 배열을 전개 연산자로 깊은 복사하여 2학기 성적 배열 생성

// 2학기 성적 배열의 첫번째와 세번째 값 변경
semester2[0] = 22;
semester2[2] = 88;

// 전체 1학기, 2학기 성적 출력
console.log("1학기 성적:", semester1);
console.log("2학기 성적:", semester2);

// 1학기, 2학기 성적을 비교하여 동일한 성적과목수 출력
const sameScores = subjects.filter((subject, index) => semester1[index] === semester2[index]).length;
console.log("동일한 성적과목수:", sameScores);

// 1학기, 2학기 성적 중 오른 과목수 출력
const improvedScores = subjects.filter((subject, index) => semester2[index] > semester1[index]).length;
console.log("오른 과목수:", improvedScores);

// 1학기, 2학기 성적 중 오른 과목명 출력
const improvedSubjects = subjects.filter((subject, index) => semester2[index] > semester1[index]);
console.log("오른 과목명:", improvedSubjects);
