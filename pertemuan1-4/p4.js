class Hitung {

    berhitung(operasi, ...args) {
        if (operasi === "+") {
            return this.tambahOverload(...args);
        } else if (operasi === "-") {
            return this.kurangOverload(...args);
        } else if (operasi === "*") {
            return this.kaliOverload(...args);
        } else if (operasi === "/") {
            return this.bagiOverload(...args);
        } else {
            throw new Error ("Simbol tidak didukung.")
        }
    }

    tambahOverload(...args) {
        var tambah1 = function (a, b) {
            return a + b;
        };
        var tambah2 = function (a, b, c) {
            return a + b + c;
        };
        var tambah3 = function (a, b, c, d) {
            return a + b + c + d;
        };

        if (args.length === 2) {
            return tambah1(args[0], args[1]);
        } else if (args.length === 3) {
            return tambah2(args[0], args[1], args[2]);
        } else if (args.length === 4) {
            return tambah3(args[0], args[1], args[2], args[3]);
        }
    }

    kurangOverload(...args) {
        var kurang1 = function (a, b) {
            return a - b;
        };
        var kurang2 = function (a, b, c) {
            return a - b - c;
        };
        var kurang3 = function (a, b, c, d) {
            return a - b - c - d;
        };

        if (args.length === 2) {
            return kurang1(args[0], args[1]);
        } else if (args.length === 3) {
            return kurang2(args[0], args[1], args[2]);
        } else if (args.length === 4) {
            return kurang3(args[0], args[1], args[2], args[3]);
        }
    }

    kaliOverload(...args) {
        var kali1 = function (a, b) {
            return a * b;
        };
        var kali2 = function (a, b, c) {
            return a * b * c;
        };
        var kali3 = function (a, b, c, d) {
            return a * b * c * d;
        };

        if (args.length === 2) {
            return kali1(args[0], args[1]);
        } else if (args.length === 3) {
            return kali2(args[0], args[1], args[2]);
        } else if (args.length === 4) {
            return kali3(args[0], args[1], args[2], args[3]);
        }
    }

    bagiOverload(...args) {
        var bagi1 = function (a, b) {
            return a / b;
        };
        var bagi2 = function (a, b, c) {
            return a / b / c;
        };
        var bagi3 = function (a, b, c, d) {
            return a / b / c / d;
        };

        if (args.length === 2) {
            return bagi1(args[0], args[1]);
        } else if (args.length === 3) {
            return bagi2(args[0], args[1], args[2]);
        } else if (args.length === 4) {
            return bagi3(args[0], args[1], args[2], args[3]);
        }
    }
}

const hitung1 = new Hitung();
console.log(hitung1.berhitung("+", 2, 3));
console.log(hitung1.berhitung("-", 22, 12, 1));
console.log(hitung1.berhitung("+", 2, 3, 4, 5));

console.log("============================");

console.log(hitung1.berhitung("*", 2, 3));
console.log(hitung1.berhitung("*", 2, 3, 4));
console.log(hitung1.berhitung("*", 2, 3, 4, 5));

console.log("============================");

console.log(hitung1.berhitung("/", 10, 5));``
console.log(hitung1.berhitung("/", 50, 5, 2));
console.log(hitung1.berhitung("/", 360, 5, 4, 3));