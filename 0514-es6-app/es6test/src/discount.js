// discount.js
const isNumber = (value) => typeof value === "number" && !isNaN(value);

const applyTenPercentDiscount = (price) => {
  if (!isNumber(price)) {
    throw new Error("Price must be a number.");
  }
  return price * 0.9;
};

const applyTwentyPercentDiscount = (price) => {
  if (!isNumber(price)) {
    throw new Error("Price must be a number.");
  }
  return price * 0.8;
};

const applyThirtyPercentDiscount = (price) => {
  if (!isNumber(price)) {
    throw new Error("Price must be a number.");
  }
  return price * 0.7;
};

export {
  applyTenPercentDiscount,
  applyTwentyPercentDiscount,
  applyThirtyPercentDiscount,
};
