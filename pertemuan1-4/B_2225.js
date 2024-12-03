class Kucing {
    constructor(nama,warna) {
    this.nama = nama;
    this.warna = warna
    }
    bersuara() {
        console.log(`${this.nama} mengeluarkan suara "Meow!"`);
    }
    perkenalan() {
        console.log(`Halo, nama saya ${this.nama} dan saya berwarna ${this.warna}`)
    }
}
    const kucing1 = new Kucing("Tom", "Hitam")
    const kucing2 = new Kucing("Jerry","Putih");

    console.log('231712225');
    console.log('Kelas : B');
    console.log('_'.repeat(25));
    console.log("[1]");
    kucing1.perkenalan();
    kucing2.perkenalan();

    function buatMobil(roda, mesin, merek = 'Tidak Diketahui') {
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
                return (`Mobil ini merek ${merek}, memiliki ${roda} roda, dan kapasitas mesin ${mesin}.`);
            }
        };    
    }
    
    const mobil1 = buatMobil(4, '1000cc');
    console.log('_'.repeat(25));
    console.log("[2]");
    const mobil2 = buatMobil(4, '1500cc', 'Toyota');
    console.log(mobil2.detailMobil());

    const prototipeMobil = {
        jumlahRoda() {
            return this.roda;
        }, 
        ccMesin() {
            return this.mesin;
        }
    };
    
    const mobil3 = Object.create(prototipeMobil);
    mobil3.roda = 4;
    mobil3.mesin = '900cc';
    mobil3.warna = 'merah';
    
    mobil3.deskmobil3 = function() {
        return `Mobil ini berwarna ${this.warna}, memiliki ${this.jumlahRoda()} roda, dan kapasitas mesin ${this.ccMesin()}.`;
    };
    
    console.log('_'.repeat(25));
    console.log("[3]");
    console.log(mobil3.jumlahRoda());   
    console.log(mobil3.ccMesin());      
    console.log(mobil3.deskmobil3()); 