// Evi Novita Gultom - 231712206

class DineIn {
    constructor (type, orderId, details) {
        this.type = type;
        this.orderId = orderId;
        this.details = details;
    }
}

class TakeAway {
    constructor (type, orderId, details) {
        this.type = type;
        this.orderId = orderId;
        this.details = details;
    }
}

class OrderFactory {
    createOrder(type, orderId, details) {
        switch (type) {
            case "DineIn" :
                return new DineIn(type, orderId, details)
            case "TakeAway" :
                return new TakeAway(type, orderId, details)
            default :
                throw new Error (`Tipe pesanan tidak tersedia.`)
        }
    }
}

class OrderManager {
    constructor() {
        this.orders = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notify(order) {
        this.observers.forEach((observer) => observer.notify(order));
    }

    getOrders() {
        return this.orders;
    }

    createOrder(order) {
        this.orders.push(order);
        this.notify(order);
        }
}


class Chef {
    constructor(name) {
        this.name = name;
    }

    notify(order) {
        console.log(`${this.name} sedang mempersiapkan pesanan ${order.orderId}.`);
    }
}

class Cashier {
    constructor(name) {
        this.name = name;
    }

    notify(order) {
        console.log(`${this.name} sedang melayani pesanan ${order.orderId}.`);
    }
}

const factory = new OrderFactory();
const manager = new OrderManager();

const chef = new Chef("Chef Evi\n");
const cashier = new Cashier("Cashier Lisa\n");

manager.addObserver(chef);
manager.addObserver(cashier);

const order1 = factory.createOrder("DineIn", "001", {
    table: 5,
    items: ["Pasta", "Salad"],
});

const order2 = factory.createOrder("TakeAway", "002", {
    customerName: "John",
    items: ["Burger"],
});

manager.createOrder(order1);
manager.createOrder(order2);

const orders = manager.getOrders();
console.log(orders);