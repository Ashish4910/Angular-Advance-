"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var Order = /** @class */ (function () {
    function Order(prd) {
        this.product = prd;
    }
    Order.prototype.getOrderDetails = function () {
        console.log(this.product.name + ' Placed Successfully');
    };
    return Order;
}());
var o = new Order(new Product_1.Product(1, 'Book', 2, true));
o.getOrderDetails();
