var ArrowFunctionDemo = /** @class */ (function () {
    function ArrowFunctionDemo() {
        this.add = function () {
            var a = 10;
            var b = 20;
            console.log(a + b);
        };
    }
    ArrowFunctionDemo.prototype.display = function () {
        console.log('Hello ALl');
    };
    ArrowFunctionDemo.prototype.greet = function () {
        console.log('Hello There I am Greet');
        this.display();
    };
    return ArrowFunctionDemo;
}());
var a = new ArrowFunctionDemo();
a.add();
