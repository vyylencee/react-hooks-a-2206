class Hewan {
    lari() {
        throw new Error("Method lari() harus diimplementasikan.");
    }

    suara() {
        throw new Error("Method suara() harus diimplementasikan.");
    }
}

class Kucing extends Hewan {
    lari() {
        console.log("Hewan ini berlari dengan kecepatan 15 km/jam.");
    }

    suara() {
        console.log("Kucing mengiau: Meow meow!");
    }
}

class Anjing extends Hewan {
    lari() {
        console.log("Hewan ini berlari dengan kecepatan 20 km/jam.");
    }

    suara() {
        console.log("Anjing menggonggong: Woof woof!");
    }
}

class Burung extends Hewan {
    lari() {
        console.log("Hewan ini sedang terbang dengan kecepatan 100 km/jam.");
    }

    suara() {
        console.log("Burung berkicau: Tweet tweet!");
    }
}

function tampilkanInfoHewan(hewan) {
    hewan.suara();
    hewan.lari();
}

const anjing_2206 = new Anjing();
const kucing_2206 = new Kucing();
const burung_2206 = new Burung();

tampilkanInfoHewan(anjing_2206);
tampilkanInfoHewan(kucing_2206);
tampilkanInfoHewan(burung_2206);