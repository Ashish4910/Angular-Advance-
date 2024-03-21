
export class Product {

    pid: number;
    name: string;
    price: number;
    isStock: boolean;



    constructor(pid: number, pname: string, price: number, available: boolean) {
        this.pid = pid;
        this.name = pname;
        this.price = price;
        this.isStock = available;
    }
    getProductDetails() {
        console.log(this.name + ' ::' + this.price + '::' + this.isStock);

    }
}


let p = new Product(1, 'Book', 2, true);
p.getProductDetails();