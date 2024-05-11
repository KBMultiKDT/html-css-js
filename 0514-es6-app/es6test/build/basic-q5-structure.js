"use strict";

function addContact3(name, phone) {
  var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "이메일없음";
  var age = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  console.log("name>> ", name);
  console.log("phone>> ", phone);
  console.log("email>> ", email);
  console.log("next_age>> ", age + 1);
  return name, "SKT " + phone, email + "@email.com", age + 1;
}
var _addContact = addContact3("지수", "010-222-3333", "hera", 100),
  name2 = _addContact.name2,
  tel = _addContact.tel,
  contact_email = _addContact.contact_email,
  next_age = _addContact.next_age;
console.log("-----------------------");
console.log("name2>> ", name2);
console.log("tel>> ", tel);
console.log("contact_email>> ", contact_email);
console.log("next_age>> ", next_age);