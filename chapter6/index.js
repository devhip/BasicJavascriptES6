//พื้นฐาน Object
const arr = [1,2,3,4,5];
console.log(arr)

const obj = new Object();
obj.name = 'pom'
obj.color = 'blue'
console.log(obj);

const obj2 = {
    name:'Nattapong',
    color: 'green',
    age:34
}
console.log(obj2)

//การเปลี่ยนแปลงค่าภายใน Object เราเรียกว่า Mutate
obj2.name = 'pom';
console.log(obj2)

const obj3 = {
    name:'Yell',
    color: 'Pink',
    age:90,
    hello:function(){
        return 'hello   ${this.name}';
    }
}
console.log(obj3);
console.log(obj3.hello());

const obj4 = {
    name:'Clown',
    color: 'Pink',
    age:90,
    hello1:function(){
        console.log(this);
    },
    hello2: () =>{
        console.log(this);
    }   
}
obj4.hello1();
obj4.hello2();