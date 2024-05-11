"use strict";

function addContact(name, mobile) {
  var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '없음';
  var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '없음';
  var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '없음';
  console.log('name >> ' + name);
  console.log('home >> ' + home);
  console.log('address >> ' + address);
  console.log('email >> ' + email);
  for (var _len = arguments.length, favoritesFoods = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
    favoritesFoods[_key - 5] = arguments[_key];
  }
  console.log('favoritesFoods >> ' + favoritesFoods);
}
addContact("홍길동", "010-222-3331");
console.log('----------');
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시");
console.log('----------');
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시", "hero@email.com", "감자", "고구마");