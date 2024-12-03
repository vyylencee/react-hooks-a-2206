class Komputer {
    constructor(merk) {
        this.merk = merk;
        this.memori = [];
    }

    addMemori(memori) {
        const memoriInsert = new Memori(memori.jenis, memori.ukuran);
        this.memori.push(memoriInsert);
    }

    static komputer(merk, memori, ukuran) {
        return merk.memori.find(memori => memori.ukuran === ukuran);
    }

    tampilkanSpesifikasi() {
        this.memori.forEach((memori) => {
            console.log(`Komputer Merk: ${this.merk}\nJenis Memori: ${memori.jenis}, Kapasitas: ${memori.ukuran}`); 
        })
    }
}

class Memori {
    constructor(jenis, ukuran) {
        this.jenis = jenis;
        this.ukuran = ukuran;
    }
}

const komputer1 = new Komputer("Dell");
komputer1.addMemori({ jenis: "DDR4", ukuran: "16GB" });

komputer1.tampilkanSpesifikasi();