class IBangunDatar {
    luas() {
        throw new Error("Metode luas() harus diimplementasikan.");
    }

    keliling() {
        throw new Error("Metode keliling() harus diimplementasikan.");
    }
}

class Persegi extends IBangunDatar {
    constructor(sisi) {
        super();
        this.sisi = sisi;
    }

    luas() {
        return this.sisi * this.sisi;
    }        

    keliling() {
        return 4 * this.sisi;
    }
}

class PersegiPanjang extends IBangunDatar {
    constructor(panjang, lebar) {
        super();
        this.panjang = panjang;
        this.lebar = lebar;
    }

    luas() {
        return this.panjang * this.lebar;
    }

    keliling() {
        return 2 * (this.panjang + this.lebar);
    }
}

const persegipanjang1 = new PersegiPanjang(2206, 2206);
console.log("Luas Persegi Panjang:", persegipanjang1.luas());
console.log("Keliling Persegi Panjang:", persegipanjang1.keliling());