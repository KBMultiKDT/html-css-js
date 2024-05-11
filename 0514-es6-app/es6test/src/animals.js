// animals.js

// animal 객체 정의
const animal = {
    // 속성들
    species: "Tiger",
    habitat: "Jungle",
    sound: "Roar",

    // 함수들
    displayInfo: () => {
        // 화살표 함수로 정의된 함수
        console.log(`종: ${animal.species}`);
        console.log(`서식지: ${animal.habitat}`);
        console.log(`소리: ${animal.sound}`);
    },

    isDangerous: () => {
        // 화살표 함수로 정의된 함수
        const dangerousSpecies = ["Tiger", "Lion", "Leopard"];
        return dangerousSpecies.includes(animal.species);
    },

    move: (speed) => {
        // 화살표 함수로 정의된 함수
        console.log(`${animal.species}가 ${speed}m만큼 이동합니다.`);
    }
};

// animal 객체의 함수 호출
/* animal.displayInfo();
console.log("위험한 동물인가?", animal.isDangerous());
animal.move(100); */

export default {animal};

//export default {animals}
//import animals from ~~
//let animal2 = animals.animal
