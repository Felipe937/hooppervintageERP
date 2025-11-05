// src/domain/Cliente.js
class Cliente {
    constructor(id, nombre, email, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.preferencias = [];
        this.fechaRegistro = new Date();
    }
    agregarPreferencia(preferencia) {
        this.preferencias.push(preferencia);
}
}
module.exports = Cliente;
