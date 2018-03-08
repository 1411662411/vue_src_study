import Watcher from "./Watcher.js"
const REG=/\{\{(.*)\}\}/ ;
class Compile {
    constructor(el,vm) {
        this.el=document.querySelector(el);
        this.vm=vm;
        this.frag=this._createFragment();
        this.el.appendChild(this.frag)
    }
    _createFragment(){
        var frag=document.createDocumentFragment();
        var child
        while (child=this.el.firstChild) {
            this._compile(child)
            frag.appendChild(child)     //节点移动，而非复制
          
        }
        return frag 
    }
    _compile(node){
        if(node.nodeType===1){
             var attr=node.attributes;
             var _this=this;
             if(attr.hasOwnProperty("v-model")){
                 var name=attr["v-model"].nodeValue;
                 node.addEventListener("input",function (e) {
                     _this.vm[name]=e.target.value ;
                 })
                 console.log(name,"1")
                 new Watcher(node, name, this.vm)
                //  node.value=this.vm[name];          
             }
        }
        if(node.nodeType===3){
            if(REG.test(node.nodeValue)){
                var name=RegExp.$1  
                name=name.trim()            
                console.log(name, "2")
               new Watcher(node,name,this.vm)
            }
        }
        
    }
}


export default Compile 