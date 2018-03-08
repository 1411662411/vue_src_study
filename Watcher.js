import Dep from "./Dep.js"
class Watcher {
    constructor(node,name,vm) {
        this.node=node
        this.name=name
        this.vm=vm
        Dep.target=this
        this.update()
        Dep.target=null;
        
    }
    update(){
        if(this.node.nodeType===1){
            this.node.value=this.vm[this.name]
        }
        if (this.node.nodeType ===3) {
            this.node.nodeValue = this.vm[this.name]
        }
    }
}


export default Watcher 