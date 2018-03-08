class Dep{

    constructor(){
        this.list=[]
    }
    listen(sub){
        this.list.push(sub)
    }
    notify(){
        this.list.forEach(function (v) {
            console.log(v)
            v.update();
        })
    }
}
Dep.target=null;
export default Dep
