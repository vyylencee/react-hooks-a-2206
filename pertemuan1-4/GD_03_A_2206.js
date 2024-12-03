class Produk {
    #nama

    constructor(nama, jumlah) {
        this.#nama = nama;
        this.jumlah = jumlah;
    }

    informasi() {
        console.log(`Produk ${this.#nama} ada sebanyak ${this.jumlah} pcs.`);
    }

    getterNama() {
        return this.#nama;
    }
}

class Makanan extends Produk {
    #expired;
    constructor(expired, nama, jumlah) {
        super(nama, jumlah);
        this.#expired = expired;
    }

    waktuRusak() {
        console.log(`Makanan ini akan rusak pada tanggal ${this.#expired}`);
    }
}

class Minuman extends Produk {
    #produksi;
    constructor(produksi, nama, jumlah) {
        super(nama, jumlah);
        this.#produksi = produksi;
    }

    waktuProduksi() {
        console.log(`Minuman ini di produksi pada tanggal ${this.#produksi}`);
    }
}

const cocacola = new Minuman ("20 November 2022", "Coca Cola", 1);
cocacola.informasi();
cocacola.waktuProduksi();