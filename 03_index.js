// @ts-nocheck
// @ts-ignore
var len1 =({}+{}).length;//类型的转换 toString()的使用  答案是30;
var len2 =([]+[]).length;//类型的转换 toString()的使用  答案是0;
var len3 =(function(){}).length;//形参的个数就是函数的长度;