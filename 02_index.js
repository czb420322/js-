var _default =0;
Object.defineProperty(window,'a',{/* 隐士的转换 */
    get(){
        return ++_default;
    }
})

// @ts-ignore
if(a===1&&a===2&&a===3){
    console.log("全等的数据转化,使用window的对象的挂载,进行对数据的转换");
}


