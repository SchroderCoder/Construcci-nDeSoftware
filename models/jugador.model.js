
const db = require('../util/database');

module.exports = class Jugador {

    constructor(un_nombre) {
        this.nombre = un_nombre;
    }

    save() {
        return db.execute('INSERT INTO jugadores (nombre) VALUES (?)', [this.nombre]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM jugadores');
    }

}