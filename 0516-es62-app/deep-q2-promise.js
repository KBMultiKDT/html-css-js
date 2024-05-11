//basic-q1-promise.js
const p = new Promise((resolve, reject) => {
    console.log("Promise를 시작합니다.");
    resolve("arr배열에 10 ~ 100사이의 정수를 10개 넣어, 오름 차순 정렬 후 리턴\n");
})

p.then((msg) => {
    console.log(`1 ==> ${msg}`);
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * (100 - 10 + 1)) + 10);
    }
    arr.sort((a, b) => a - b);
    return arr;
})
    .then((msg) => {
        console.log(`2 ==> ${msg}`);
        console.log("arr배열의 값 중 최대값과 최소값을 찾아 곱한 후 리턴");
        const max = Math.max(...msg); //배열의 값들이 전체 들어간 효과!
        const min = Math.min(...msg);
          console.log(max + "  " + min);

        // ...msg는 ES6의 전개 연산자
        // 이 연산자는 배열이나 문자열 같은 iterable 객체를 확장하여 각
        // 요소를 개별적인 인자로 분리합니다.
        //
        // 위 코드에서 then() 메서드의 콜백 함수에서
        // msg는 이전 then()에서 반환한 값입니다.
        // 첫 번째 then()에서는 배열을 반환하고 있으므로, msg는 배열입니다.
        // 이때 배열의 요소를 각각의 인자로 분리하기 위해 전개 연산자를 사용
        //
        // 따라서 Math.max(...msg)는 배열 msg의 요소 중 가장 큰 값을 구하기 위해 사용
        // 이를 통해 최대값을 구한 후, Math.min(...msg)를 사용하여
        // 배열 msg의 요소 중 가장 작은 값을 구합니다.
        return max * min;
    })
    .then((msg) => {
        console.log(`3 ==> ${msg}`);
        console.log(`배열의 최대값과 최소값의 곱은 ${msg}`);
    })
    .catch((error) => {
        console.log(`오류발생 ==> ${error}`);
    })

// 10 ~ 100 사이의 정수를 랜덤하게 생성하는 함수
function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 배열에 랜덤한 정수를 채우는 함수
function fillArrayWithRandomIntegers(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(generateRandomInteger(10, 100));
    }
    return arr;
}

// 오름차순으로 배열을 정렬하는 함수
function sortArrayAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// 배열 생성 후 정렬하여 반환
const arr = fillArrayWithRandomIntegers(10);
const sortedArr = sortArrayAscending(arr);
console.log("정렬된 배열:", sortedArr);