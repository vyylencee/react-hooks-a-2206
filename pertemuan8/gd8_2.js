const ayah = {
    bekerja: function () {
        console.log("Ayah sedang bekerja di Kantor.");
    }
}

const ibu = {
    bekerja: function () {
        console.log("Ibu sedang menjahit.");
    },

    memasak: function () {
        console.log("Ibu sedang memasak spaghetti Aglio e Olio.");
    }
}

const adik = {
    belajar: function () {
        console.log("Adik sedang belajar di Rumah.");
    }
}

function doTugas(orang) {
    if (orang.bekerja) {
        orang.bekerja();
    } else if (orang.memasak) {
        orang.memasak();
    } else {
        console.log("Perilaku tidak dikenali.");
    }
}

doTugas(ayah);
doTugas(ibu);
doTugas(adik);