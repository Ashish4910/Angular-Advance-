import {Demo} from "./demo";

class other {

    otherMethod(){
        console.log("other mothod");
        let d = new Demo();
        d.greet();
    }
}

let o = new other();

o.otherMethod();
