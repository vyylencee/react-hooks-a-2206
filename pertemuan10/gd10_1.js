class PackageDelivery {
    constructor(id, weight, distance) {
        this.id = id;
        this.weight = weight;
        this.distance = distance;
    }

    calculate()  {
        const baseRate = 1500
        return this.weight * this.distance * baseRate;
    }
};

class PackageDeliveryPrinter {
    print (item) {
        const cost = item.calculate();
        console.log(`Mencetak label pengiriman:
            Berat: ${item.weight} kg
            Jarak: ${item.distance} km
            Biaya: Rp.${cost}`);
    }
};

class PackageDeliveryDatabase {
    save (item) {
        console.log(`Menyimpan paket dengan id ${item.id} ke dalam database pengiriman...`);
    }  
}

console.log(`SRP2_A_12206`);

const package = new PackageDelivery('12206', 10, 10);
const printer = new PackageDeliveryPrinter();
const saver = new PackageDeliveryDatabase();

printer.print(package);
saver.save(package);