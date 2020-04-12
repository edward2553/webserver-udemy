// las promesas nos permiten ejecutar un trabajo sincrono o asincrono. despues de que se resuelva la tarea
// nos permiten ejecutar un trabajo en particular

let empleados = [{
        id: 1,
        nombre: "Edward",
    },
    {
        id: 2,
        nombre: "Claudia"
    },
    {
        id: 3,
        nombre: "Andres",
    },
];

let salarios = [{
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id) => {

    //el resolve se ejecuta si la promesa es exitosa
    //el reject se llama si la promesa no es exitosa
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`);
        } else {
            //solo se puede enviar un dato. en caso de requerir enviar varios
            //lo recomdable es enviar un objeto
            resolve(empleadoDB);
        }
    })
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario ${ empleado.nombre }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });
}

// getEmpleado(3).then(empleado => {
//     // console.log('Empleado de BD', empleado)
//     getSalario(empleado).then(salario => {
//         console.log(salario);
//     }, (err) => {
//         console.log(err);
//     });
// }, (err) => {
//     console.log(err);
// });

getEmpleado(3).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
}).catch(err => {
    console.log(err);
});