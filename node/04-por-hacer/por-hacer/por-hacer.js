const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(listadoPorHacer);
        fs.writeFile(`db/data.json`, data, (err) => {
            if (err) {
                reject('No se pudo grabar', err)
            } else {
                resolve(`Se ha guardado el archivo`.red);
            }
        });
    })
}

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
        return listadoPorHacer;
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    // returns -1 si la tarea no existe
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    completado = (completado === 'true');
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDb();
    // returns -1 si la tarea no existe
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDb();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    cargarDb,
    actualizar,
    borrar
}