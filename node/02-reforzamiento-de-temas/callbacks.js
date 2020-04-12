// Un callback es algo que se ejecuta despues de algo

// setTimeout(() => {
//     console.log('Hola mundo');
// }, 5000);

let getUsuarioByID = (id, callback) => {

    let usuario = {
        nombre: 'Edward',
        id,
    }
    if (id === 20) {
        callback(`El usuario con id ${id} no existe en la base de datos`);
    } else {
        callback(null, usuario);
    }

}

// En muchos paquetes de node se trabaja con callbacks
getUsuarioByID(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    } else
        console.log('usuario de base de datos', usuario);

});