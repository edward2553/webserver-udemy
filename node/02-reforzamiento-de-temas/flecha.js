// function sumar() {
//     return 3 + 5;
// }

// let sumar = () => 2 + 3;

// function saludar() {
//     return 'Hola mundo';
// }

// let saludar = () => 'hola mundo';

let deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}


console.log(deadpool.getNombre());