class Transportasi {
    mode () {
        console.log("Transportasi ini bergerak maju.");
    }
}

class Mobil extends Transportasi {
    mode() {
        console.log("Mobil bergerak di jalan.");
    }
}

class Kereta extends Transportasi {
    mode() {
        console.log("Kereta bergerak di rel.");
    }
}

class Pesawat extends Transportasi {
    mode() {
        console.log("Pesawat terbang di udara.");
    }
}

function tampilkanModeTransportasi(transportasi) {
    transportasi.mode();
}

const mobil = new Mobil();
const kereta = new Kereta();
const pesawat = new Pesawat();

tampilkanModeTransportasi(mobil);
tampilkanModeTransportasi(kereta);
tampilkanModeTransportasi(pesawat);