// Evi Novita Gultom - 231712206

class ConnectionManager {
    constructor() {
        this.connections = [];
    }

    createConnection(type, host) {
        const factory = new DatabaseFactory();
        const connection = factory.createDatabase(type, host);
        this.connections.push(connection);
        return connection;
    }

    getConnections() {
        return this.connections;
    }
}

class MySQL {
    constructor(type, host) {
        this.type = type;
        this.host = host;
    }

    connect() {
        console.log(`Menghubungkan ke ${this.type} di ${this.host}`);
    }
}

class PostgreSQL {
    constructor(type, host) {
        this.type = type;
        this.host = host;
    }

    connect() {
        console.log(`Menghubungkan ke ${this.type} di ${this.host}`);
    }
}

class DatabaseFactory {
    createDatabase(type, host) {
        switch (type) {
            case "MySQL":
                return new MySQL(type, host);
            case "PostgreSQL":
                return new PostgreSQL(type, host);
            default:
                throw new Error("Tipe database tidak valid.");
        }
    }
}

const manager = new ConnectionManager();
manager.createConnection("MySQL", "localhost");
manager.createConnection("PostgreSQL", "127.0.0.1");

const connections = manager.getConnections();
connections.forEach((conn) => conn.connect());

console.log(connections);