// 블록 스코프 변수(ES6)
var users = [{
  no: 1,
  name: '표태진',
  email: 'taejin@dokgo.com'
}, {
  no: 2,
  name: '김종일',
  email: 'jongil@dokgo.com'
}]; // 객체 분해(ES6)

function print(_ref) {
  var {
    no,
    name,
    email
  } = _ref;
  // 템플릿 문자열(ES6)
  console.log("".concat(no, ", ").concat(name, ", ").concat(email));
}

; // for .. of (ES6)

for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}
