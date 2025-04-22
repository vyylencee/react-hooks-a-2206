class Giro {
    constructor(nama, saldo, tarik) {
        this.nama = nama;
        this.saldo = saldo;
        this.tarik = tarik;
        this.overdraft = 1000000;
    }

    transaksi() {
        if (this.tarik > this.overdraft) {
            console.log("Saldo anda tidak mencukupi.")
        } else if (this.tarik > this.saldo) {
            const sisaSaldo = (this.saldo - this.tarik) 
            console.log(`${this.nama} menarik Rp${this.tarik}. Saldo saat ini Rp${sisaSaldo}.`)
        }
    }
}

const nasabah = new Giro("Seka", 500000, 1200000);
nasabah.transaksi()
