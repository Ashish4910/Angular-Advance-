"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(pid, pname, price, available) {
        this.pid = pid;
        this.name = pname;
        this.price = price;
        this.isStock = available;
    }
    Product.prototype.getProductDetails = function () {
        console.log(this.name + ' ::' + this.price + '::' + this.isStock);
    };
    return Product;
}());
exports.Product = Product;
var p = new Product(1, 'Book', 2, true);
p.getProductDetails();
