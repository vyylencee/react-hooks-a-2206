class Payment_2206 {
    prosesPembayaran(amount) {
        throw new Error ("Fungsi 'prosesPembayaran()' harus diimplementasikan");
    }
}

class Notifikasi_2206 {
    kirimNotifikasi(pesan) {
        throw new Error ("Fungsi 'kirimNotifikasi()' harus diimplementasikan");
    }
}

class KartuKredit extends Payment_2206 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar ${amount} berhasil dilakukan dengan kartu kredit.`);
    }
}

class Ewallet extends Payment_2206 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar ${amount} berhasil dilakukan dengan E-Wallet.`);
    }
}

class TransferBank extends Payment_2206 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar ${amount} berhasil dilakukan dengan transfer bank.`);
    }
}

class NotifEmail extends Notifikasi_2206 {
    kirimNotifikasi(pesan) {
        console.log(`Notifikasi: ${pesan}`);
    }
}

class NotifSMS extends Notifikasi_2206 {
    kirimNotifikasi(pesan) {
        console.log(`Notifikasi: ${pesan}`);
    }
}

class PaymentProcessor_2206 {
    constructor(paymentMethod, notifikasiMethod) {
        this.paymentMethod = paymentMethod;
        this.notifikasiMethod = notifikasiMethod;
    }

    process(amount) {
        this.paymentMethod.prosesPembayaran(amount);
        this.notifikasiMethod.kirimNotifikasi(`Your payment of ${amount} was successful.`);
    }
}

const kartuKredit = new KartuKredit();
const notifEmail = new NotifEmail();
const processor1 = new PaymentProcessor_2206(kartuKredit, notifEmail);
processor1.process(100);