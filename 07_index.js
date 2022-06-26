// @ts-nocheck
//构造函数
function Foo(){
    // 全局变量赋值
    // 如果Foo没有执行,下面赋值行为是不进行的
    getName = function(){
        console.log(1);
    }
    console.log(this);
    return this//WINDOWS->windows.getName()
}
// 函数Foo上面的额静态方法
Foo.getName= function(){
    console.log(2);
    console.log(this)
}
// 扩展函数原型的方法
Foo.prototype.getName  = function(){
    console.log(3);
}
// 给全局的变量赋值的一个匿名函数
var getName = function(){
    console.log(4)
}

// 函数的说明
function getName (){
    console.log(5);
}
// 执行Foo上面的静态方法
Foo.getName()//2
getName()//4 
Foo().getName()//windows=>1
getName()//windows=>1=>getName()=>1
new Foo.getName()//Foo.getName()=>2
new new Foo.getName()//3

var foo =new Foo();
foo.getName()  //=>Foo.prototype.getName
