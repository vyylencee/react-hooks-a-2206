console.log("231712206")
console.log("Kelas : A")

class Kucing {
    constructor(nama, warna) {
    this.nama = nama;
    this.warna = warna;
    }
    bersuara() {
    console.log(`${this.nama} mengeluarkan suara "Meow!"`);
    }
    perkenalan() {
    console.log(`Halo, nama saya ${this.nama} dan saya berwarna ${this.warna}.`);
    }
    }
    const kucing1 = new Kucing("Tom", "hitam");
    const kucing2 = new Kucing("Jerry", "putih");

    console.log("[1]")
    kucing1.perkenalan()
    kucing2.perkenalan()
    console.log("_".repeat(25))

function buatMobil(roda, mesin, merek) {
    return {
    roda,
    mesin,
    merek,
    jumlahRoda() {
        return roda;
    },
    ccMesin() {
        return mesin;
    },
    detailMobil() {
        return `Mobil ini merek ${merek}, memiliki ${roda} roda, dan kapasitas mesin ${mesin}.`;
    }
    };
    }
    
    const mobil2 = buatMobil(4, "1500cc", "Toyota");
    console.log("[2]")
    console.log(mobil2.detailMobil())
    console.log("_".repeat(25))

const prototipeMobil = {
    jumlahRoda() {
    return this.roda;
    }, 
    ccMesin() {
    return this.mesin;
    }
    };
    
    const mobil3 = Object.create(prototipeMobil);
    mobil3.roda = 3;
    mobil3.mesin = '900cc';
    mobil3.warna = 'merah';
    mobil3.detail = function () {
    return `Mobil ini berwarna ${this.warna}, memiliki ${this.jumlahRoda()} roda, dan kapasitas mesin ${this.ccMesin()}.`;
    }
    console.log("[3]")
    console.log(mobil3.detail())
    console.log("_".repeat(25))