class Restoran {
    pesanMakanan (...args) {
        var pesan1 = function (namaMakanan) {
            console.log(`Makanan dengan nama '${namaMakanan}' tidak tersedia.`);
        };

        var pesan2 = function (namaMakanan, namaPemesan) {
            console.log(`Pesanan telah diterima: '${namaMakanan}' untuk ${namaPemesan}.`);
        };

        if (args.length === 1) {
            return pesan1(args[0]);
        } else if (args.length === 2) {
            return pesan2(args[0], args[1]);
        } else if (args.length > 2) {
            console.log(`Jumlah Parameter tidak valid.`);;
        }
    }
}

const restoran = new Restoran();
restoran.pesanMakanan("Nasi Goreng");
restoran.pesanMakanan("Nasi Goreng", "Budi");
restoran.pesanMakanan("Nasi Goreng", "Budi", "Pedas");