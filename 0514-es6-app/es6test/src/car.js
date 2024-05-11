// cars.js

// car 객체 정의
const car = {
    // 속성들
    brand: "Toyota",
    model: "Camry",
    year: 2022,

    // 함수들
    displayInfo: function() {
        // 속성명 사용하는 함수 정의
        console.log(`브랜드: ${this.brand}`);
        console.log(`모델: ${this.model}`);
        console.log(`연도: ${this.year}`);
    },

    isPopular: function() {
        // 속성명 사용하는 함수 정의
        const popularBrands = ["Toyota", "Honda", "Ford", "Chevrolet"];
        return popularBrands.includes(this.brand);
    },

    accelerate: function() {
        // 속성명 사용하는 함수 정의
        console.log(`속도를 50km/h로 가속합니다.`);
    }
};

export {car};
