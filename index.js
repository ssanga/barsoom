const core = require('@actions/core');

// Obtener el input
const name = core.getInput('name');

// Crear el mensaje
const greeting = `Hello ${name}!`;

// Mostrar en el log
console.log(greeting);

// Establecer el output
core.setOutput('greeting', greeting);