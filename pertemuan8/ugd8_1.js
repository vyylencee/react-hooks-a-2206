class Kendaraan {
    constructor(merk, model) {
        this.merk = merk;
        this.model = model;
    }

    getDeskripsi() {
        return `Kendaraan ini perlu diimplementasikan.`;
    }
}

class Mobil extends Kendaraan {
    constructor(merk, model, jumlahPintu) {
        super(merk, model);
        this.jumlahPintu = jumlahPintu;
    }

    getDeskripsi() {
        return `Mobil ${this.merk} ${this.model} dengan ${this.jumlahPintu} pintu.`;
    }
}

class Motor extends Kendaraan {
    constructor(merk, model, tipe) {
        super(merk, model);
        this.tipe = tipe;
    }

    getDeskripsi() {
        return `Motor ${this.merk} ${this.model} tipe ${this.tipe}.`;
    }
}

function deskripsikanKendaraan(kendaraan) {
    console.log(kendaraan.getDeskripsi());
}

const mobil_evi_2206 = new Mobil("Toyota", "Camry", 4);
const motor_evi_2206 = new Motor("Yamaha", "R15", "Sport");

deskripsikanKendaraan(mobil_evi_2206);
deskripsikanKendaraan(motor_evi_2206); 