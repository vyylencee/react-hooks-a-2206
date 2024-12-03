class MathHelper {
    static PHI = 3.14;

    static kelilingLingkaran(r) {
        return 2 * MathHelper.PHI * r;
    }

    static luasLingkaran(r) {
        return MathHelper.PHI * r * r;
    }    

    static luasPermukaanTabung(r, t) {
        return MathHelper.PHI * r * r * t;
    }    

    static volumeTabung(r, t) {
        return MathHelper.PHI * r * r * t;
    }
}

console.log(`Keliling Lingkaran : ${MathHelper.kelilingLingkaran(7)}`);
console.log(`Luas Lingkaran : ${MathHelper.luasLingkaran(7)}`);

console.log(`Luas Permukaan Tabung : ${MathHelper.luasPermukaanTabung(7, 10)}`);
console.log(`Volume Tabung : ${MathHelper.volumeTabung(7, 10)}`);
