//let新增了块级作用域  const 声明的变量不能改变 ------------------------------------------------------------/
let name = 'zach'
	while (true) {
	    let name = 'obama'
	    console.log(name)  //obama
	    break
	}
console.log(name)  //zach
        
/*var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}				
a[6](); // 10*/

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6

function getVal() {
    return [ 1, 2 ];
}
let [x,y] = getVal(),//函数返回值的解构
console.log('x:'+x+', y:'+y);//输出：x:1, y:2'

[name,,age]=['wayou','male','secrect'];//数组解构
console.log('name:'+name+', age:'+age);//输出： name:wayou, age:secrect 

const PI = Math.PI    //finally 
const [a, b, c] = [1, 2, 3];   // 最好这样声明变量
const b = `foo${a}bar`;         //最好
//class---------------------------------------------------------------------------------------------------/
class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        console.log(this.type + ' says ' + say)
    }
}
let animal = new Animal()
animal.says('hello') //animal says hello


class Cat extends Animal {
    constructor(){
        super()
        this.type = 'cat'
    }
}
let cat = new Cat()
cat.says('hello') //cat says hello
/*
上面代码首先用class定义了一个“类”，constructor方法，这就是构造方法，而this关键字则代表实例对象。
简单地说，constructor内定义的方法和属性是实例对象自己的，而constructor外定义的方法和属性则是所有实力对象可以共享的。
Class之间可以通过extends关键字实现继承，这比ES5的通过修改原型链实现继承，要清晰和方便很多。
上面定义了一个Cat类，该类通过extends关键字，继承了Animal类的所有属性和方法。
super关键字，它指代父类的实例（即父类的this对象）。
子类必须在constructor方法中调用super方法，否则新建实例时会报错。
这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
ES6的继承机制，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。
P.S 如果你写react的话，就会发现以上三个东西在最新版React中出现得很多。
创建的每个component都是一个继承React.Component的类。*/

//箭头函数function------------------------------------------------------------------------------------------//
function  (i){ return i + 1; } //ES5
(i) => i + 1 //ES6

function(x, y) { 
    x++;
    y--;
    return x + y;
}
(x, y) => {x++; y--; return x+y}

//并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，
//它的this是继承外面的，因此内部的this就是外层代码块的this。

 //*字符串拼接-------------------------------------------------------------------------------------------------
$("#result").append(
  "There are <b>" + basket.count + "</b> " +
  "items in your basket, " +
  "<em>" + basket.onSale +
  "</em> are on sale!"
);   //ES5

//用反引号（`）来标识起始，用${}来引用变量，而且所有的空格和缩进都会被保留在输出之中
$("#result").append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);   //ES6



/*- 对象取值------------------------------------------------------------------------------------------------*/
let cat = 'ken'
let dog = 'lili'
let zoo = {cat, dog}
console.log(zoo)  //Object {cat: "ken", dog: "lili"}

let dog = {type: 'animal', many: 2}
let { type, many} = dog
console.log(type, many)   //animal 2

/*通过对象字面量创建对象
可以在对象字面量里面定义原型
定义方法可以不用function关键字
直接调用父类方法*/
var human = {
    breathe() {
        console.log('breathing...');
    }
};
var worker = {
    __proto__: human, //设置此对象的原型为human,相当于继承human
    company: 'freelancer',
    work() {
        console.log('working...');
    }
};
human.breathe();//输出 ‘breathing...’
worker.breathe();//输出 ‘breathing...’
/*方法传参数------------------------------------------------------------------------------------------------*/
function animal(type = 'cat'){  //静态写死
    console.log(type) 
}
animal();

function animals(...types){
    console.log(types)
}
animals('cat', 'dog', 'fish') //["cat", "dog", "fish"]


function sayHello(name){
	//传统的指定默认参数的方式
	var name=name||'dude';
	console.log('Hello '+name);
}
//运用ES6的默认参数
function sayHello2(name='dude'){
	console.log(`Hello ${name}`);
}
sayHello();//输出：Hello dude
sayHello('Wayou');//输出：Hello Wayou
sayHello2();//输出：Hello dude
sayHello2('Wayou');//输出：Hello Wayou

/* 循环 for of------------------------------------------------------------------------------------------------*/
var someArray = [ "a", "b", "c" ];
for (v of someArray) { 
    console.log(v);//输出 a,b,c
}
/* 集合------------------------------------------------------------------------------------------------*/
// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

/*Promises是处理异步操作的一种模式----------------------------------------------------------------------------------*/
//创建promise
var promise = new Promise(function(resolve, reject) {
    // 进行一些异步或耗时操作
    if ( /*如果成功 */ ) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
});
//绑定处理程序
promise.then(function(result) {
	//promise成功的话会执行这里
    console.log(result); // "Stuff worked!"
}, function(err) {
	//promise失败会执行这里
    console.log(err); // Error: "It broke"
});