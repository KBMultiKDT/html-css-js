var name = "홍길동";
var age = 20;
var email = "sdhong@test.com";

var object = {name, age, email}

console.log(object);
console.log('name>> ' , object.name);
console.log('age>> ' , object.age);
console.log('email>> ' , object.email);

console.log("-----------------");

var battery = {
    name : "에너자이자",
    total_price : 5000,
    discount_price : 4700,
    one_price : 2350,
    arrive_date : "내일(수)도착 보장",
    rate : 50,
    stack_money : 188,
    discount : function () {
        console.log("할인을 하는 중입니다.");
    },
    print() {
        console.log("name>> ", this.name);
        console.log("total_price>> ", this.total_price);
        console.log("discount_price>> ", this.discount_price);
        console.log("one_price>> ", this.one_price);
        console.log("arrive_date>> ", this.arrive_date);
        console.log("rate>> ", this.rate);
        console.log("stack_money>> ", this.stack_money);
    }
}
    battery.discount();
    battery.print();
