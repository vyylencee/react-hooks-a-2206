class Atlet {
    latihan () {
        console.log("Atlet ini sedang latihan.")
    }
}

class Pelari extends Atlet {
    latihan () {
        console.log("Pelari sedang berlatih lari jarak jauh.")
    }
}

class Perenang extends Atlet {
    latihan () {
        console.log("Perenang sedang berlatih gaya bebas.")
    }
}

function panggilLatihanAtlet(atlet) {
    atlet.latihan();
}

const pelari = new Pelari();
const perenang = new Perenang();

panggilLatihanAtlet(pelari);
panggilLatihanAtlet(perenang);