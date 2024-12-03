class Dokter {
    constructor(nama,spesialisasi) {
        this.nama = nama;
        this.spesialisasi = spesialisasi;
    }
}

class Pasien {
    constructor(nama,umur) {
        this.nama = nama;
        this.umur = umur;
    }
}

class JadwalKonsultasi {
    constructor(dokter,pasien, waktuKonsultasi) {
        this.dokter = dokter;
        this.pasien = pasien;
        this.waktuKonsultasi = waktuKonsultasi;
    }

    tampilInformasi() {
        console.log(`${this.dokter.nama} dengan spesialisasi ${this.dokter.spesialisasi} akan merawat pasien bernama ${this.pasien.nama} berusia ${this.pasien.umur} pada ${this.waktuKonsultasi}.`);
    }
}

const dokter1 = new Dokter("Dr. Budi", "Kardiologi");
const pasien1 = new Pasien("Andi", 45);
const konsultasi1 = new JadwalKonsultasi(dokter1, pasien1, "10:00 Pagi, 5 Juni 2024");

konsultasi1.tampilInformasi();