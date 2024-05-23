// Funcion
// function suma(a, b) {
//     return a + b;
// } 

// Funcion farArrow
// const suma = (a,b) => {
//     return a + b;
// }

// Funcion farArrow simplificada
// const suma = (a,b) => a+b

// console.log(suma(2,3))

// Objeto
// const usuario = {
//     nombre: 'Ivan',
//     apellido: 'Guerra',
//     edad: 36,
//     direccion: {
//         pais: 'Mexico',
//         ciudad: 'Queretaro',
//         calle: 'La misma 123'
//     },
//     amigos: ['Alex', 'Carlos'],
//     estatus: true,
//     enviaCorreo: enviarCorr =() => 'enviando...'
// }

// Propiedades 
// console.log(usuario)
// console.log(usuario.direccion.calle)
// console.log(usuario.amigos)

// Metodos 
// console.log(usuario.enviaCorreo())

// Trabajo con el DOM
const titulo = document.createElement('h1')
titulo.innerText = 'Soy un titulo creado con JS' //propiedad innerText
document.body.append(titulo)

const boton = document.createElement('button')
boton.innerText = 'Presiona'
document.body.append(boton)
// desde JS podemos generar eventos o situaciones en las que se va a realizar algo

boton.addEventListener('click', function (){
    // console.log('Evento click ejecutado')
    titulo.innerText = "Evento click ejecutado"
    alert('Exito')
})
