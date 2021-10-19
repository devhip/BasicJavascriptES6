//ตัวอย่างชนิดข้อมูล
console.log(typeof 23)
console.log(typeof "23")
console.log(typeof 23.50)
console.log(typeof false)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)

var x;
console.log(x)

//================================ค่าเริ่มต้นของฟังก์ชัน return เป็น  undefined เช่นกัน
function a(){}
console.log(a());

var y = null;
console.log(y);

function b(){ return null }
console.log(b());

//========ชนิดข้อมูลแบบ Object
//Array , Object , Function , Class instance
var foo = Boolean(false);
var bar = String('Hello');
console.log(typeof Boolean)
console.log(typeof String)