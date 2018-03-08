// 把数据  和  发布订阅者绑定到一块  
import Dep from "./Dep.js"
class Observer {
    constructor(data) {
        this.data=data;
        Object.keys(this.data).forEach(key=>{
            this._bind(data,key,data[key])
        })
    }
    _bind(data,key,val){
        var myDep=new Dep();
        Object.defineProperty(data,key,{
            get(){                          //添加订阅者
                if(Dep.target) myDep.listen(Dep.target);
                return val
            },
            set(newValue){
                if(newValue===val)return    
                val=newValue                 
                myDep.notify()              //发布信息
            }
        })
    }
}


export default Observer 