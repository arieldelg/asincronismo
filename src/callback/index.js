const callback = (nombre) => {
    return `Hola ${nombre}`
}

const saludar = (nombre) => {
    return callback(nombre)
}

console.log(saludar('Ariel'))

const saludarEnIngles = (name) => {
    console.log(`Hola ${name}`);
}

setTimeout(saludarEnIngles, 1000, 'Ariel, soy un espia')