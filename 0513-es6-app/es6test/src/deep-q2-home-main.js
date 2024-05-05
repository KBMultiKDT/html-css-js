import { car } from "./car.js";
import animal  from "./animals.js";

//객체 리터럴 깊은 복사시, 함수는 복사되지 않는다.
//함수를 실행하는 경우 파라메터 없는 속성으로 접근
let animal2 = animal.animal;
animal2.species = "Lion";
animal2.displayInfo();
console.log("위험한 동물인가?", animal2.isDangerous());
animal2.move(100);

console.log("-------------");

let car2 = car;
car2.brand = "Mer";
car2.model = "Sedan";
car2.year = 2024;
car2.displayInfo();
console.log("인기 있는 차종인가?", car2.isPopular());
car2.accelerate();
