class MataPelajaran {
    constructor(nama) {
        this.nama = nama;
    }
}

class Guru {
    constructor(namaGuru) {
        this.namaGuru = namaGuru;
        this.mataPelajaran = [];
    }

    tambahkanMataPelajaran(mataPelajaran) {
        this.mataPelajaran.push(mataPelajaran);
    }

    tampilkanInfo() {
        console.log(`Guru: ${this.namaGuru}`);
        console.log(`Mata Pelajaran yang diajarkan:`);
        this.mataPelajaran.forEach(mp => console.log(`- ${mp.nama}`));
    }
}

class Sekolah {
    constructor(namaSekolah) {
        this.namaSekolah = namaSekolah;
        this.daftarGuru = [];
    }

    tambahkanGuru(guru) {
        this.daftarGuru.push(guru);
    }

    tampilkanDaftarGuru() {
        console.log(`Sekolah: ${this.namaSekolah}`);
        this.daftarGuru.forEach(guru => guru.tampilkanInfo());
    }
}

const sekolah = new Sekolah("SDN 1 Cibadak");
const guru1 = new Guru("Ahmad");
const guru2 = new Guru("Budi");
const mataPelajaran1 = new MataPelajaran("Matematika");
const mataPelajaran2 = new MataPelajaran("Fisika");
const mataPelajaran3 = new MataPelajaran("Kimia");
const mataPelajaran4 = new MataPelajaran("Biologi");


sekolah.tambahkanGuru(guru1);
sekolah.tambahkanGuru(guru2);
guru1.tambahkanMataPelajaran(mataPelajaran1);
guru1.tambahkanMataPelajaran(mataPelajaran2);
guru2.tambahkanMataPelajaran(mataPelajaran3);
guru2.tambahkanMataPelajaran(mataPelajaran4);
sekolah.tampilkanDaftarGuru();