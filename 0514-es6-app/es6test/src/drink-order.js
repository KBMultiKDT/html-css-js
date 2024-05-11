// drink-order.js
const drinks = [
  { name: "라떼", price: 5000 },
  { name: "아이스티", price: 6000 },
  { name: "밀크티", price: 5500 },
];

const calculateTotalPrice = (orders) => {
  let total = 0;
  for (const order of orders) {
    const drink = drinks.find((drink) => drink.name === order.name);
    if (drink) {
      console.log(
        `주문명: ${order.name}, 주문메뉴가격: ${drink.price.toLocaleString()}원, 주문가격: ${(drink.price * order.quantity).toLocaleString()}원`
      );
      total += drink.price * order.quantity;
    }
  }
  return total;
};

export { drinks, calculateTotalPrice };
