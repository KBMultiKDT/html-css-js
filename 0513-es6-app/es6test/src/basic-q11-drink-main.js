// basic-q11-drink-main.js
import { drinks, calculateTotalPrice } from "./drink-order.js";

const orders = [
  { name: "라떼", quantity: 2 },
  { name: "아이스티", quantity: 4 },
  { name: "밀크티", quantity: 3 },
];

const totalPrice = calculateTotalPrice(orders);
let discountedPrice = totalPrice;

if (totalPrice >= 150000) {
  discountedPrice *= 0.7; // 30% 할인
} else if (totalPrice >= 100000) {
  discountedPrice *= 0.8; // 20% 할인
} else if (totalPrice >= 50000) {
  discountedPrice *= 0.9; // 10% 할인
}

let order_count = 0;
for (const one of orders) {
   order_count +=  one.quantity;
}
console.log('-------------------------------');
console.log(`총 주문 금액: ${totalPrice.toLocaleString()}원`);
console.log(`할인 후 결제 금액: ${discountedPrice.toLocaleString()}원`);
console.log(`총 주문 수량: ${order_count}개`);
console.log(`총 할인 금액: ${(totalPrice - discountedPrice).toLocaleString()}원`);
console.log("총 주문 종류 " + drinks.map(drink => drink.name).join(', '));
console.log('-------------------------------');
