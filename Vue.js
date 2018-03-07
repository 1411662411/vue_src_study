import Compile  from "./Compile.js";
import Observer from "./Observer.js";


class Vue{
    constructor(options){
        this.$options=options
        this.$el=this.$options.el
        this._data=this.$options.data
        Object.keys(this._data).forEach(v=>{
            this._proxy(v);
        })
        this._proxy()
        new Observer(this._data)
        new Compile(this.$el,this)
    }
    _proxy(key){
        var self=this;
        Object.defineProperty(this,key,{
            get(){
                return self._data[key];
            },
            set(value){
                self._data[key]=value;
            }
        })
    }
}


export default Vue 