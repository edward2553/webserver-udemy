/**
 * cuando ponermos el async en la funcion, es lo mismo que si estuvieramos devolviendo una promesa.
 * Es decir que la funcion a la cual nosotros le pusimos el wait, va a resolver una promesa.
 * Cualquier error que suceda en la funcion async, va a activar el catch
 */
// let getNombre = async() => {
//     // undefined.nombre;
//     // throw new error('No existe un nombre para este usuario')
//     return 'edward';
// }

/**
 * un await nunca puede estar solo, el async si
 */
let getNombre = async() => {
    return 'edward';
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`
}

saludo().then(mensaje => {
    console.log(mensaje);
}).catch(e => {
    console.log(e);
});