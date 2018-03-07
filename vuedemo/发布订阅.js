class Event{
    constructor(){
        this.listenList=[]
    }
    listen(listener){
        this.listenList.push(listener)
    }
    trigger(){
        this.listenList.forEach((v)=>{
            v.updata();
        })
    }
}

var person1={
    updata(){
        console.log("我订阅了1")
    }
}
var person2 = {
    updata() {
        console.log("我订阅了2")
    }
}

var myEvent=new Event();
myEvent.listen(person1)
myEvent.listen(person2)
myEvent.trigger();


