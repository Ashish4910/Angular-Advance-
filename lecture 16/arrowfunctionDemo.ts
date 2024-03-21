class ArrowFunctionDemo {

    display() {
        console.log('Hello ALl');

    }
    add = () => {   // function can also be as arrow function
        let a = 10;
        let b = 20;
        console.log(a + b);

    }

    // function can also be called as ()=>{}
    // add = function() {
    //     let a = 10;
    //     let b = 20;
    //     console.log(a + b);

    // }

    greet() {
        console.log('Hello There I am Greet');

        this.display();

    }
}

let a = new ArrowFunctionDemo();
a.add();