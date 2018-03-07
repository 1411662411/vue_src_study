class Dep{

    constructor(){
        this.list=[]
    }
    listen(sub){
        this.list.push(sub)
    }
    notify(){
        this.list.forEach(function  (v ) {
            v.updata();
        })
    }
}
Dep.target=null;
export default Dep
