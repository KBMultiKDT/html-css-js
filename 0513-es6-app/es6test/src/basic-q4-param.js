function addContact(name, mobile, home = '없음', address = '없음', email = '없음', ...favoritesFoods) {
    console.log('name >> ' + name);
    console.log('home >> ' + home);
    console.log('address >> ' + address);
    console.log('email >> ' + email);
    console.log('favoritesFoods >> ' + favoritesFoods);
}

addContact("홍길동", "010-222-3331")
console.log('----------');
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시")
console.log('----------');
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시", "hero@email.com", "감자", "고구마")