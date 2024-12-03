class Kendaraan {
    showKecepatan() {
        return "Kendaraan bergerak dengan sangat cepat.";
    }
}

class Mobil extends Kendaraan {
    showKecepatan() {
        return "Mobil bergerak dengan kecepatan maksimal 360km/h.";
    }
}

class Motor extends Kendaraan {
    showKecepatan() {
        return "Motor memang hanya dapat melaju 100km/h, namun bisa meliuk.";
    }
}

class Pesawat extends Kendaraan {
    showKecepatan() {
        return "Pesawatlah yang tercepat, dapat melaju hingga 500km/h.";
    }
}

function ujiKecepatan(kendaraan) {
    console.log(kendaraan.showKecepatan());
}

const mobil = new Mobil();
const motor = new Motor();
const pesawat = new Pesawat();
const kendaraan = new Kendaraan();

ujiKecepatan(mobil);
ujiKecepatan(motor);
ujiKecepatan(pesawat);
ujiKecepatan(kendaraan);