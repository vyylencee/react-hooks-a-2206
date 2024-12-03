class Order {
    constructor(id, customerNama, items) {
        this.id = id;
        this.customerNama = customerNama;
        this.items = items;
        this.status = "Pending";
    }

    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].quantity * this.items[i].price;
        }
        return total;
    }
}

class OrderOperation {
    perform(order) {
        throw new Error("This method must be implemented by subclasses.");
    }
}

class PrintBill extends OrderOperation {
    perform(order) {
        console.log(`ID Pesanan: ${order.id}`)
        console.log(`Customer: ${order.customerNama}`)
        order.items.forEach(order => console.log(`Item: ${order.item} - Jumlah: ${order.quantity} - Harga: ${order.price}`));
        console.log(`Total Harga: ${(order.calculateTotal() + (order.calculateTotal() * 0.1)).toFixed(2)}`);
    }
}

class ProcessOrder extends OrderOperation {
    perform(order) {
        order.status = "Processed";
        console.log(`Memproses Pesanan dengan ID: ${order.id}`);
    }
}

class TrackOrder extends OrderOperation {
    perform(order) {
        console.log(`Status ID Pesanan ${order.id} sekarang adalah ${order.status}`);
    }
}

const order = new Order(12206, "Evi", [
    { item: "Kopi Susu", quantity: 2, price: 10000 },
    { item: "Kue Lapis", quantity: 1, price: 4000 },
]);

const printBill = new PrintBill();
const processOrder = new ProcessOrder();
const trackOrder = new TrackOrder();

printBill.perform(order);
processOrder.perform(order);
trackOrder.perform(order);