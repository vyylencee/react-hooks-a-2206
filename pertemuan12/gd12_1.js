class Logger {
    constructor() {
        if (!Logger.instance) {
            Logger.instance = this;
            this.logs = [];
        }
        return Logger.instance;
    }

    log(message) {
        console.log(`Log telah ditambahkan: ${message}`);
        this.logs.push(message);
    }

    getLogs() {
        return this.logs;
    }
}

const logger1 = new Logger();
logger1.log("Aplikasi dimulai");
const logger2 = new Logger();
logger2.log("Pengguna login");

console.log(logger1 === logger2);
console.log(logger1.getLogs());