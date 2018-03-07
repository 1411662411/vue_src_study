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

        }
        if(node.nodeType===3){
            if(REG.test(node.nodeValue)){
                // var name=RegExp.$1
                // console.log(node.nodeValue)
                
                // name=name.trim()
                name ="message"
                
                console.log(name)
               new Watcher(node,name,this.vm)
            }
        }
    }
}


export default Compile 