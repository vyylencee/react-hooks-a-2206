class Hewan {
    constructor() {
        if (this.constructor === Hewan) {
            throw new Error (
                "Kelas abstrak 'Hewan' tidak bisa diinstansiasi secara langsung."
            );
        }
    }

    bersuara() {
        throw new Error (
            "Metode abstrak 'bersuara' harus diimplementasikan oleh kelas turunan."
        )
    }

    berjalan() {
        throw new Error (
            "Metode abstrak 'berjalan' harus diimplementasikan oleh kelas turunan."
        )
    }

    deskripsi () {
        console.log("Ini adalah hewan.");
    }
}

class Kucing extends Hewan {
    bersuara() {
        console.log("Kucing ini mengeong.");
    }

    berjalan() {
        console.log("Kucing ini berjalan.");
    }
}

class Anjing extends Hewan {
    bersuara() {
        console.log("Anjing ini menggonggong.");
    }

    berjalan() {
        console.log("Anjing ini berjalan.");
    }
}

const kucing1 = new Kucing();
kucing1.bersuara();
kucing1.berjalan();
kucing1.deskripsi();

const anjing1 = new Anjing();
anjing1.bersuara();
anjing1.berjalan();
anjing1.deskripsi();