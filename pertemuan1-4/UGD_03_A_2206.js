class Buku {
    #tahunterbit;
    #penulis;

    constructor(tahunterbit, penulis) {
        this.#tahunterbit = tahunterbit;
        this.#penulis = penulis;
    }

    infoBuku() {
        console.log(`Tahun Terbit : ${this.#tahunterbit}`);
        console.log(`Penulis : ${this.#penulis}`);
    }

    detailBuku() {
        console.log(`Buku ini ditulis oleh ${this.#penulis} dan diterbitkan pada tahun ${this.#tahunterbit}`);
    }

    getPenulis() {
        return this.#penulis;
    }
}

class Fiksi extends Buku {
    constructor(tahunterbit, penulis, genre) {
        super(tahunterbit, penulis);
        this.genre = genre;
    }

    infoFiksi() {
        console.log(`Buku fiksi ini termasuk ke dalam genre ${this.genre}`);
    }
}

class NonFiksi extends Buku {
    constructor(tahunterbit, penulis, stok) {
        super(tahunterbit, penulis);
        this.stok = stok;
    }

    infoStokNonFiksi() {
        console.log(`Buku non fiksi ini memiliki stock sebanyak ${this.stok}`);
    }
}

class Novel extends Fiksi {
    #judul;
    constructor(tahunterbit, penulis, genre, judul) {
        super(tahunterbit, penulis, genre);
        this.#judul = judul;
    }

    infoNovel () {
        console.log (`Penulis ini menerbitkan buku dengan judul ${this.#judul}`);
    }
}

class Pendidikan extends NonFiksi {
    #harga;
    constructor(tahunterbit, penulis, stok, harga) {
        super(tahunterbit, penulis, stok);
        this.#harga = harga;
    }

    infoPendidikan() {
        console.log(`Buku ini dijual seharga ${this.#harga}`);
    }
}

const bukunovel = new Novel (2015, "Tere Liye", "Action", "Pulang");
const bukupendidikan = new Pendidikan (2024, "Dian Nofitasari", 10, 60000);

bukunovel.infoBuku();
bukunovel.detailBuku();
bukunovel.infoFiksi();
bukunovel.infoNovel();
console.log("-".repeat(25));
bukupendidikan.infoBuku();
bukupendidikan.detailBuku();
bukupendidikan.infoStokNonFiksi();
bukupendidikan.infoPendidikan();