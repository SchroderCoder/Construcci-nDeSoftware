const ganadores = [];
const db = require('./util/database');

module.exports = class Ganador {

    constructor(un_nombre) {
        this.nombre = un_nombre;
    }
    save() {
        ganadores.push(this);
    }

    static fetchAll() {
        db.execute("SELECT * FROM equipos")
        .then(([rows, fieldData]) =>{
            console.log(rows);
        })
        .catch(err => {
            console.log(err);
        }) ;;
    }

}