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
        this.node.nodeValue=this.vm[name]
        console.log(this.node.nodeValue)
        console.log(this.vm["message"])
    }
}


export default Watcher 