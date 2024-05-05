/*
function addContact3(name, phone, email = "이메일없음",  age = 0) {
    console.log("name>> ", name);
    console.log("phone>> ", phone);
    console.log("email>> ", email);
    console.log("next_age>> ", age + 1);
    name2 = name;
    tel = "SKT " + phone;
    contact_email = email + "@email.com";
    next_age = age + 1;
    return {name2, tel, contact_email, next_age}
}
let {name2, tel, contact_email, next_age} = addContact3("지수", "010-222-3333", "hera", 100);

console.log("-----------------------");
console.log("name2>> ", name2);
console.log("tel>> ", tel);
console.log("contact_email>> ", contact_email);
console.log("next_age>> ", next_age);
*/

/*
function addContact2(member) {
    if (!member.email) {
        member.email = "이메일 없음";
    }
    if (!member.age) {
        member.age = 0;
    }
    console.log("name>> ", member.name);
    console.log("phone>> ", member.phone);
    console.log("email>> ", member.email);

    console.log("next_age>> ", member.age + 1);
    name2 = member.name;
    tel = "SKT " + member.phone;
    contact_email = member.email + "@email.com";
    next_age = member.age + 1;

    return {name2, tel, contact_email, next_age}
}
let {name2, tel, contact_email, next_age} = addContact2({   name : "지수",
                                                            phone : "010-222-3333",
                                                            email : "hera"
                                                        });

console.log("-----------------------");
console.log("name2>> ", name2);
console.log("tel>> ", tel);
console.log("contact_email>> ", contact_email);
console.log("next_age>> ", next_age);
*/
