 /**************局部变量 和 全局变量**********************/
var n =  10;  m = 10; //全局变量 任何地方都可以使用
function demo(){
    
    var i = 10;//局部变量 ：只能在函数中使用
    x = 10; //全局变量: demo()调用后，才能启用
}
demo();

