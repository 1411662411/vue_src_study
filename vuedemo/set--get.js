//  get  set 
// 发布订阅模式


Object.defineProperty(global,"name",{
    get(){                      //注入订阅人          
      return "111111"
    },
    set(value) {                //提示更新作用
        console.log("更新了")
     
    }
})

console.log(name)
