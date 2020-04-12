let deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

// console.log(deadpool.getNombre());

// si quiero obtener el nombre de deadpool en una variable aparte
// se puede hacer así

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(`${primerNombre} ${apellido} - poder: ${poder}`);