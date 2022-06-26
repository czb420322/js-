//node环境和浏览器的环境下的全局变量的指引位置,一个是global,后者是window的顶级的作用域

// console.log("first")
//  const test =  new Function("a",'b','c','console.log(a+b+c)');
//  test(1,2,3)//6

 var a=1,b=2;
 function ceshi(){
    var b=3 ;
    // return new Function("c",'console.log(a+b+c)')
    eval('!function _(c){console.log(a+b+c)}(4)')
 }
 ceshi()//8
//  var  t = ceshi();
//  t(4)//7

var t1 = new Function("console.log('t1')");
var t2 = Function("console.log('t2')")
// console.log(t1.__proto__===Function.prototype);
// console.log(Function.__proto__===Function.prototype)
var code =`function anonymous(){
     console.log("t1");
}`
eval(`!${code}`)
t1();
t2();
