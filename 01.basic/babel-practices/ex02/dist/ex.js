// 블록 스코프 변수(ES6)
const users = [{
  no: 1,
  name: '표태진',
  email: 'taejin@dokgo.com'
}, {
  no: 2,
  name: '김종일',
  email: 'jongil@dokgo.com'
}]; // 객체 분해(ES6)

function print({
  no,
  name,
  email
}) {
  // 템플릿 문자열(ES6)
  console.log(`${no}, ${name}, ${email}`);
}

; // for .. of (ES6)

for (let user of users) {
  print(user);
}