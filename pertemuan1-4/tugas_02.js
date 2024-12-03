class Produk {
    _namaProduk;
    _harga;
    _jumlahStok;

    constructor(namaProduk, harga, jumlahStok) {
        this._namaProduk = namaProduk
        this._harga = harga
        this._jumlahStok = jumlahStok
    }

    beli() {
        this._jumlahStok++;
        console.log(`Produk ${this._namaProduk} telah di beli!`);
    }

    jual() {
        this._cekStok();
        if (this._cekStok()) {
            this._jumlahStok = this._jumlahStok--;
            console.log(`Produk ${this._namaProduk} telah di jual!`);
        } else {
            console.log(`Stok produk ${this._namaProduk} sedang tidak tersedia!`);
        }
    }

    infoProduk() {
        console.log(`Produk : ${this._namaProduk}`);
        console.log(`Harga : ${this._harga}`);
        console.log(`Jumlah Stok : ${this._jumlahStok}`);
    }

    cekStok() {
        if (this._jumlahStok > 0) {
            return true;
        } else {
            return false;
        }
    }

}

class Kasir {
    #nama;
    #id;

    constructor(nama, id) {
        this.#nama = nama;
        this.#id = id;
    }

    infoKasir() {
        console.log(`Kasir ${this.#nama}, ID: ${this.#id}`);
    }

    jualProduk(Produk, Pelanggan) {
        console.log(`Transaksi: oleh Pelanggan ${Pelanggan.getNama()}`);
        Produk.jual();
    }
}

class Pelanggan {
    #nama;

    constructor(nama) {
        this.#nama = nama;
    }

    getNama() {
        return this.#nama;
    }
}

class Toko {
    #namaToko = "ATK Jogja";
    #modal = 500000;

    infoToko () {
        console.log(`Toko ${this.#namaToko} memiliki modal ${this.#modal}`);
    }

    beliProduk(Produk) {
        this.#modal -= Produk.harga;
        Produk.beli();
        console.log(`Stok Produk telah ditambahkan!`);
    }
}

class Sembako extends Produk {
    #jenis;

    constructor(nama, harga, jumlahStok) {
        super(nama, harga, jumlahStok)
        this.#jenis = "Sembako";
    }

    infoSembako() {
        this.infoProduk();
        console.log(`Jenis : ${this.#jenis}`);
    }
}

class Perabotan extends Produk {
    #jenis;

    constructor(namaProduk, harga, jumlahStok) {
        super(namaProduk, harga, jumlahStok);
        this.#jenis = "Perabotan";
    }

    infoPerabotan() {
        this.infoProduk();
        console.log(`Jenis: ${this.#jenis}`);
    }
}

const produk3 = new Sembako("Roti", 10000, 10);
const produk4 = new Perabotan("Panci", 10000, 10);

produk3.infoSembako();
produk4.infoPerabotan();